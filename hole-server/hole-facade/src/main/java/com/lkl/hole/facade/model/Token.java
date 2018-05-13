package com.lkl.hole.facade.model;

import lombok.Data;

/**
 * @Author: mingshan
 * @Date: Created in 11:08 2018/5/13
 */
@Data
public class Token {
    private static final long serialVersionUID = -4743364335923069447L;

    private String openid;
    private String token;

    public Token() { }

    public Token(String openid, String token) {
        this.openid = openid;
        this.token = token;
    }
}
