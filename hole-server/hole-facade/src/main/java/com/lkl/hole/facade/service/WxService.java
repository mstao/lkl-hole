package com.lkl.hole.facade.service;

import java.util.Map;

/**
 * @Author: mingshan
 * @Date: Created in 10:13 2018/5/11
 */
public interface WxService {

    /**
     * 根据小程序登录返回的code获取openid和session_key
     * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-login.html?t=20161107
     * @param wxCode
     * @return
     */
    Map<String, Object> getWxSession(String wxCode);

    /**
     * 缓存微信openId和session_key
     * @param wxOpenId		微信用户唯一标识
     * @return
     */
    String create3rdSession(String wxOpenId);
}
