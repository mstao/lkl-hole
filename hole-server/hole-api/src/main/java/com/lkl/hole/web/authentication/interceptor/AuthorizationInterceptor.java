package com.lkl.hole.web.authentication.interceptor;


import com.lkl.hole.common.annotation.Authorization;
import com.lkl.hole.facade.model.Token;
import com.lkl.hole.facade.service.RedisTokenService;
import com.lkl.hole.web.constant.WxAuth;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Method;

/**
 * The custom interceptor that checks out the current request has authorization.
 * @Author: Minsghan
 * @Date: Created in 19:27 2017/10/14
 */
@Component
public class AuthorizationInterceptor extends HandlerInterceptorAdapter {
    @Autowired
    private RedisTokenService redisTokenService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
                             Object handler) throws Exception {
        // Checks out the annotation of authorization that is method level.
        if (!(handler instanceof HandlerMethod)) {
            return true;
        }

        HandlerMethod handlerMethod = (HandlerMethod)handler;
        Method method = handlerMethod.getMethod();

        // Gets authorization string from request header.
        String authorization = request.getHeader(WxAuth.WX_SESSION);

        // Gets the model of Token from authorization string.
        Token token = redisTokenService.getToken(authorization);
        // Checks out the token that is from Redis,
        if (redisTokenService.checkToken(token)) {
            // Puts userId into request.
            request.setAttribute("openId", token.getOpenid());
            return true;
        }

        // If verify token failed, and the current method has the annotation of authorization,
        // sets the response code to 401.
        // The 401 code means unauthorized.
        if (method.getAnnotation(Authorization.class) != null) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return false;
        }

        return true;
    }
}
