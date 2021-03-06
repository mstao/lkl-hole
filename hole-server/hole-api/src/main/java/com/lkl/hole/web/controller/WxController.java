package com.lkl.hole.web.controller;

import com.lkl.hole.facade.model.User;
import com.lkl.hole.facade.service.UserService;
import com.lkl.hole.facade.service.WxService;
import com.lkl.hole.web.constant.WxAuth;
import com.lkl.hole.web.vo.ResultVO;
import com.lkl.hole.web.vo.SessionVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;


/**
 * @Author: mingshan
 * @Date: Created in 17:17 2018/5/11
 */
@Api(value = "wechat")
@Controller
public class WxController extends BaseController {
    @Autowired
    private WxService wxService;

    @Autowired
    private UserService userService;

    /**
     * 微信登录
     *
     * @param request
     * @return
     */
    @RequestMapping(value = "/user/wxlogin", method = RequestMethod.POST)
    @ApiOperation(value="微信登录", httpMethod="POST", notes="微信登录")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "x-wechat-code", value = "微信登录的 code", required = true, dataType = "String",
                    paramType = "header"),
            @ApiImplicitParam(name = "x-wechat-encrypted", value = "微信登录后已加密的用户信息", required = true, dataType = "String",
                    paramType = "header"),
            @ApiImplicitParam(name = "x-wechat-iv", value = "解密向量", required = true, dataType = "String",
                    paramType = "header")
    })
    public ResponseEntity<ResultVO> login(HttpServletRequest request) {
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
            thirdSession = wxService.create3rdSession(wxOpenId);

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

        ResultVO vo = new ResultVO();
        vo.setErrcode(0);
        vo.setErrmsg("");
        SessionVO session = new SessionVO();
        session.setSession(thirdSession);
        vo.setData(session);
        return new ResponseEntity<>(vo, HttpStatus.OK);
    }
}
