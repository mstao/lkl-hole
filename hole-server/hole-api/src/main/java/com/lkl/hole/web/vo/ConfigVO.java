package com.lkl.hole.web.vo;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

/**
 * @Author: mingshan
 * @Date: Created in 20:59 2018/5/10
 */
public class ConfigVO implements Serializable {
    private boolean isTest;

    public void setIsTest(boolean isTest) {
        this.isTest = isTest;
    }

    public boolean getIsTest() {
        return this.isTest;
    }
}
