package com.lkl.hole.web.vo;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

/**
 * @Author: mingshan
 * @Date: Created in 20:47 2018/5/10
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class ResultVO implements Serializable {
    private int errcode;
    private String errmsg;
    private Object data;

    public  ResultVO() {}

    public ResultVO(int errcode, String errmsg, Object data) {
        this.errcode = errcode;
        this.errmsg = errmsg;
        this.data = data;
    }
}
