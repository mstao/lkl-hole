package com.lkl.hole.service.util;

import com.alibaba.fastjson.JSONObject;
import com.lkl.hole.facade.model.User;
import io.jsonwebtoken.Claims;

/**
 * @Author: mingshan
 * @Date: Created in 12:06 2018/5/13
 */
public class TokenUtil {

    public static User getUserFromToken(String token) {
        try {
            Claims claims = JWTUtil.parseJWT(token);
            String subject = claims.getSubject();
            User user = JSONObject.parseObject(subject, User.class);
            return user;
        } catch (Exception e) {
            e.printStackTrace();
            System.out.print("解析JWT token 失败！");
        }
        return null;
    }
}
