package com.lkl.hole.web.controller;

import com.lkl.hole.common.util.RedisHelper;
import com.lkl.hole.common.util.StringUtil;
import com.lkl.hole.facade.model.User;
import com.lkl.hole.facade.service.UserService;
import com.lkl.hole.facade.service.WxService;
import com.lkl.hole.web.constant.WxAuth;
import com.lkl.hole.web.enums.ErrorStatus;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;


/**
 * Created by lihang on 2017/4/13.
 */
@Controller
@Api(value = "用户登陆态相关API")
public class WxController extends BaseController {
    @Autowired
    private WxService wxService;

    @Autowired
    private UserService userService;

    /**
     * 根据客户端传过来的code从微信服务器获取appid和session_key，然后生成3rdkey返回给客户端，后续请求客户端传3rdkey来维护客户端登录态
     *
     * @param wxCode 小程序登录时获取的code
     * @return
     */
    @RequestMapping(value = "/getSession", method = RequestMethod.GET, produces = "application/json")
    @ApiOperation(notes = "根据code获取appid和session_key生成3rdkey", httpMethod = "GET", value = "根据code获取appid和session_key生成3rdkey")

    @ApiImplicitParams({
            @ApiImplicitParam(name = "code", value = "小程序登录时获取的code", paramType = "query", dataType = "string")
    })
    @ResponseBody
    public Map<String, Object> createSssion(@RequestParam(required = true, value = "code") String wxCode) {
        Map<String, Object> wxSessionMap = wxService.getWxSession(wxCode);

        if (null == wxSessionMap) {
            return rtnParam(ErrorStatus.communication_failure, null);
        }
        //获取异常
        if (wxSessionMap.containsKey("errcode")) {
            return rtnParam(ErrorStatus.failed_get_WeChat_session_key, null);
        }
        String wxOpenId = (String) wxSessionMap.get("openid");
        String wxSessionKey = (String) wxSessionMap.get("session_key");
        System.out.println(wxSessionKey);
        Long expires = Long.valueOf(String.valueOf(wxSessionMap.get("expires_in")));
        String thirdSession = wxService.create3rdSession(wxOpenId, wxSessionKey, expires);
        Map<String, String> map = new HashMap<String, String>();
        map.put("sessionId", thirdSession);
        return rtnParam(ErrorStatus.exist, map);
    }

    /**
     * 验证用户信息完整性
     *
     * @param rawData   微信用户基本信息
     * @param signature 数据签名
     * @param sessionId 会话ID
     * @return
     */
    @RequestMapping(value = "/checkUserInfo", method = RequestMethod.GET, produces = "application/json")
    @ApiOperation(notes = "此API暂时不用", httpMethod = "GET", value = "此API暂时不用")

    @ApiImplicitParams({
            @ApiImplicitParam(name = "rawData", value = "小程序登录时获取的code", paramType = "query", dataType = "string"),
            @ApiImplicitParam(name = "signature", value = "小程序登录时获取的code", paramType = "query", dataType = "string"),
            @ApiImplicitParam(name = "sessionId", value = "小程序登录时获取的code", paramType = "query", dataType = "string")
    })
    @ResponseBody
    public Map<String, Object> checkUserInfo(@RequestParam(required = true, value = "rawData") String rawData,
                                             @RequestParam(required = true, value = "signature") String signature,
                                             @RequestParam(required = true, defaultValue = "sessionId") String sessionId) {
        Object wxSessionObj = RedisHelper.get(sessionId);
        if (null == wxSessionObj) {
            return rtnParam(ErrorStatus.user_identity_expired, null);
        }
        String wxSessionStr = (String) wxSessionObj;
        String sessionKey = wxSessionStr.split("#")[0];
        StringBuffer sb = new StringBuffer(rawData);
        sb.append(sessionKey);

        byte[] encryData = DigestUtils.sha(sb.toString());
        byte[] signatureData = signature.getBytes();
        Boolean checkStatus = Arrays.equals(encryData, signatureData);
        return rtnParam(ErrorStatus.exist, new HashMap().put("checkPass", checkStatus));
    }

    /**
     * 获取用户openId和unionId数据(如果没绑定微信开放平台，解密数据中不包含unionId)
     *
     * @param encryptedData 加密数据
     * @param iv            加密算法的初始向量
     * @return
     */
    @RequestMapping(value = "/decodeUserInfo", method = RequestMethod.POST, produces = "application/json")
    @ApiOperation(notes = "解析用户数据", httpMethod = "POST", value = "解析用户数据")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "encryptedData", value = "用户加密数据", paramType = "query", dataType = "string"),
            @ApiImplicitParam(name = "iv", value = "加密算法的初始向量", paramType = "query", dataType = "string"),
            @ApiImplicitParam(name = "session", value = "登陆后返回的3rd_session", required = true, paramType = "header", dataType = "string")
    })
    @ResponseBody
    public Map<String, Object> decodeUserInfo(@RequestParam(required = true, value = "encryptedData") String encryptedData,
                                              @RequestParam(required = true, defaultValue = "iv") String iv, HttpServletRequest request) {
        String sessionKey = (String) request.getAttribute("sessionKey");
        String openId = (String) request.getAttribute("openId");

        User user = userService.findByOpenId(openId);
        User user1 = userService.decodeInfo(encryptedData, iv, sessionKey);
        if (user1 == null) {
            return rtnParam(ErrorStatus.user_sensitive_data_decryption_failed, null);
        }
        if (user==null){
            if(userService.insert(user1)==0){
                return rtnParam(ErrorStatus.insertuserinfo_wrong, null);
            }
        } else {
            if(!user.equals(user1)){
                if(userService.update(user1)==0){
                    return rtnParam(ErrorStatus.updateuserinfo_wrong, null);
                }
            }
        }

        return rtnParam(ErrorStatus.SUCCESS, null);
    }


    @RequestMapping(value = "/user/wxlogin", method = RequestMethod.GET)
    @ApiImplicitParams({
            @ApiImplicitParam(name = "x-wechat-code", value = "微信登录的 code", required = true, dataType = "String",
                    paramType = "header"),
            @ApiImplicitParam(name = "x-wechat-encrypted", value = "微信登录后已加密的用户信息", required = true, dataType = "String",
                    paramType = "header"),
            @ApiImplicitParam(name = "x-wechat-iv", value = "解密向量", required = true, dataType = "String",
                    paramType = "header")
    })
    @ResponseBody
    public String login(HttpServletRequest request) {
        String wxCode = request.getHeader(WxAuth.WX_CODE);
        String wxEncrypted = request.getHeader(WxAuth.WX_ENCRYPTED);
        String wxIV = request.getHeader(WxAuth.WX_IV);

        //获取信息
        Map<String, Object> wxSessionMap = wxService.getWxSession(wxCode);
        String thirdSession = null;
        if (null != wxSessionMap) {
            String wxOpenId = (String) wxSessionMap.get("openid");
            String wxSessionKey = (String) wxSessionMap.get("session_key");
            logger.info("openid: {}, session_key: {}", wxOpenId, wxSessionKey);
            Long expires = Long.valueOf(String.valueOf(wxSessionMap.get("expires_in")));
            thirdSession = wxService.create3rdSession(wxOpenId, wxSessionKey, expires);

            User user = userService.findByOpenId(wxOpenId);
            // 解析用户数据
            User user1 = userService.decodeInfo(wxEncrypted, wxIV, wxSessionKey);

            if (user == null) {
                userService.insert(user1);
            } else {
                if(!user.equals(user1)){
                    userService.update(user1);
                }
            }
        }

        return  thirdSession;
    }


    protected Map<String, Object> rtnParam(ErrorStatus errorStatus, Object data) {
        //正常的业务逻辑
        Map<String, Object> map;
        if (errorStatus.getCode() == 0) {
            map = new HashMap<String, Object>();
            map.put("code", errorStatus.getCode());
            map.put("message", errorStatus.getMessage());
            map.put("content", (data == null) ? new Object() : data);
            return map;
        } else {
            map = new HashMap<String, Object>();
            map.put("code", errorStatus.getCode());
            map.put("message", errorStatus.getMessage());
            return map;
        }
    }
}
