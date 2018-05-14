package com.lkl.hole.facade.model;

import lombok.Data;

import java.io.Serializable;

/**
 * @Author: mingshan
 * @Date: Created in 11:08 2018/5/13
 */
@Data
public class Token implements Serializable {
    private static final long serialVersionUID = 5931096236616145748L;

    private String openid;
    private String token;

    public Token() { }

    public Token(String openid, String token) {
        this.openid = openid;
        this.token = token;
    }
}
