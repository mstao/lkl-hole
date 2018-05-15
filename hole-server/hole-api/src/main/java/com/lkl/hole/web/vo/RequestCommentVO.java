package com.lkl.hole.web.vo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;

/**
 * @Author: mingshan
 * @Date: Created in 15:18 2018/5/14
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class RequestCommentVO implements Serializable {
    private static final long serialVersionUID = 8299294791428530526L;

    private Long bid;
    private String content;
    @JsonProperty("isAnonymous")
    private Boolean anonymous;
    private String replyTo;

    public Long getBid() {
        return bid;
    }

    public void setBid(Long bid) {
        this.bid = bid;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Boolean getAnonymous() {
        return anonymous;
    }

    public void setAnonymous(Boolean anonymous) {
        this.anonymous = anonymous;
    }

    public String getReplyTo() {
        return replyTo;
    }

    public void setReplyTo(String replyTo) {
        this.replyTo = replyTo;
    }

    @Override
    public String toString() {
        return "RequestCommentVO{" +
                "bid=" + bid +
                ", content='" + content + '\'' +
                ", anonymous=" + anonymous +
                ", replyTo='" + replyTo + '\'' +
                '}';
    }
}
