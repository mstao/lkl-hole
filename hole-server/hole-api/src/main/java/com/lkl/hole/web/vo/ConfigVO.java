package com.lkl.hole.web.vo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

/**
 * @Author: mingshan
 * @Date: Created in 20:59 2018/5/10
 */
public class ConfigVO implements Serializable {
    private static final long serialVersionUID = 396778757646180593L;
    @JsonProperty("isTest")
    private Boolean test;

    public Boolean getTest() {
        return test;
    }

    public void setTest(Boolean test) {
        this.test = test;
    }

    @Override
    public String toString() {
        return "ConfigVO{" +
                "test=" + test +
                '}';
    }
}
