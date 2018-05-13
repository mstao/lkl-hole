package com.lkl.hole.service.impl;

import com.ctc.wstx.dtd.TokenModel;
import com.lkl.hole.facade.model.Token;
import com.lkl.hole.facade.model.User;
import com.lkl.hole.facade.service.RedisTokenService;
import com.lkl.hole.service.constant.JWT;
import com.lkl.hole.service.util.JWTUtil;
import com.lkl.hole.service.util.TokenUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

/**
 * @Author: mingshan
 * @Date: Created in 11:10 2018/5/13
 */
@Service
public class RedisTokenServiceImpl implements RedisTokenService {
    private static final Logger logger = LoggerFactory.getLogger(RedisTokenServiceImpl.class);
    @Autowired
    private RedisTemplate<String, String> redisTemplate;

    @Override
    public Token creatToken(String openId) {
        User user = new User();
        user.setOpenId(openId);
        String subject = JWTUtil.generalSubject(user);
        String token = JWTUtil.createJWT(openId, subject, JWT.JWT_TTL);
        Token model = new Token(openId, token);
        redisTemplate.boundValueOps(openId).set(token, JWT.TOKEN_EXPIRES_HOUR, TimeUnit.HOURS);
        return model;
    }

    @Override
    public void deleteToken(String openId) {
        redisTemplate.delete(openId);
    }

    @Override
    public boolean checkToken(Token model) {
        if (model == null) {
            return false;
        }
        Object source = redisTemplate.boundValueOps(model.getOpenid()).get();
        if (source == null) {
            return false;
        }

        String token = source.toString();
        if ("".equals(token) || !token.equals(model.getToken())) {
            return false;
        }

        redisTemplate.boundValueOps(model.getOpenid()).expire(JWT.TOKEN_EXPIRES_HOUR, TimeUnit.HOURS);
        return true;
    }

    @Override
    public Token getToken(String authorization) {
        if (authorization == null || "".equals(authorization)) {
            return null;
        }

        User user = TokenUtil.getUserFromToken(authorization);
        if (user == null) {
            return null;
        }


        Token model = new Token(user.getOpenId(), authorization);
        return model;
    }
}
