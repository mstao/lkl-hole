package com.lkl.hole.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.lkl.hole.common.util.HttpUtil;
import com.lkl.hole.common.util.RedisHelper;
import com.lkl.hole.facade.service.WxService;
import com.lkl.hole.service.constant.WxAuth;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Map;

/**
 * @Author: mingshan
 * @Date: Created in 10:43 2018/5/11
 */
@Service
public class WxServiceImpl implements WxService {

    @Override
    public Map<String, Object> getWxSession(String wxCode) {
        StringBuffer sb = new StringBuffer();
        sb.append("appid=").append(WxAuth.APP_ID);
        sb.append("&secret=").append(WxAuth.SECRET);
        sb.append("&js_code=").append(wxCode);
        sb.append("&grant_type=").append(WxAuth.GRANT_TYPE);
        String res = HttpUtil.sendGet(WxAuth.SESSION_HOST, sb.toString());
        if (res == null || "".equals(res)) {
            return null;
        }
        try {
            return new ObjectMapper().readValue(res, Map.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public String create3rdSession(String wxOpenId, String wxSessionKey, Long expires) {
        String thirdSessionKey = RandomStringUtils.randomAlphanumeric(64);
        StringBuffer sb = new StringBuffer();
        sb.append(wxSessionKey).append("#").append(wxOpenId);
        String res = RedisHelper.put(thirdSessionKey, expires, sb.toString());
        System.out.println(res);
        return thirdSessionKey;
    }
}