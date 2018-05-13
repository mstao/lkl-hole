package com.lkl.hole.facade.service;

import com.lkl.hole.facade.model.Token;

/**
 * @author mingshan
 */
public interface RedisTokenService {

    /**
     * Creates the token of authorization.
     * @param openId
     * @return The model of Token.
     */
    Token creatToken(String openId);

    /**
     * Deteles the token of authorization.
     * @param openId
     */
    void deleteToken(String openId);

    /**
     * Checks out the token that is from Redis.
     * @param token
     * @return
     */
    boolean checkToken(Token token);

    /**
     * Gets the model of Token from authorization string.
     * @param authorization
     * @return The model of Token.
     */
    Token getToken(String authorization);
}
