package com.lkl.hole.web.vo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;

/**
 * @Author: mingshan
 * @Date: Created in 14:07 2018/5/14
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class BlogCommentVO implements Serializable {
    private static final long serialVersionUID = 1973996778976361637L;

    private Long uid;
    private Long cid;
    private String openid;
    private String content;
    private String avatar;
    private String nickname;
    @JsonProperty("isAnonymous")
    private Boolean anonymous;
    private String time;
    @JsonProperty("isAdmin")
    private Boolean admin;
    @JsonProperty("isAuthor")
    private Boolean author;

    public Long getUid() {
        return uid;
    }

    public void setUid(Long uid) {
        this.uid = uid;
    }

    public Long getCid() {
        return cid;
    }

    public void setCid(Long cid) {
        this.cid = cid;
    }

    public String getOpenid() {
        return openid;
    }

    public void setOpenid(String openid) {
        this.openid = openid;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public Boolean getAnonymous() {
        return anonymous;
    }

    public void setAnonymous(Boolean anonymous) {
        this.anonymous = anonymous;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Boolean getAdmin() {
        return admin;
    }

    public void setAdmin(Boolean admin) {
        this.admin = admin;
    }

    public Boolean getAuthor() {
        return author;
    }

    public void setAuthor(Boolean author) {
        this.author = author;
    }

    @Override
    public String toString() {
        return "BlogCommentVO{" +
                "uid=" + uid +
                ", cid=" + cid +
                ", openid='" + openid + '\'' +
                ", content='" + content + '\'' +
                ", avatar='" + avatar + '\'' +
                ", nickname='" + nickname + '\'' +
                ", anonymous=" + anonymous +
                ", time='" + time + '\'' +
                ", admin=" + admin +
                ", author=" + author +
                '}';
    }
}
