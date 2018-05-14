package com.lkl.hole.web.vo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;

/**
 * @Author: mingshan
 * @Date: Created in 17:58 2018/5/14
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class NotificationVO implements Serializable {
    private static final long serialVersionUID = 8485647418129359320L;

    private Long nid;
    private Long cid;
    private Long bid;
    private String from;
    private String to;
    private String content;
    private Boolean isUnread;
    private String time;

    private UserVO user;

    public Long getNid() {
        return nid;
    }

    public void setNid(Long nid) {
        this.nid = nid;
    }

    public Long getCid() {
        return cid;
    }

    public void setCid(Long cid) {
        this.cid = cid;
    }

    public Long getBid() {
        return bid;
    }

    public void setBid(Long bid) {
        this.bid = bid;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Boolean getUnread() {
        return isUnread;
    }

    public void setUnread(Boolean unread) {
        isUnread = unread;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public UserVO getUser() {
        return user;
    }

    public void setUser(UserVO user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "NotificationVO{" +
                "nid=" + nid +
                ", cid=" + cid +
                ", bid=" + bid +
                ", from='" + from + '\'' +
                ", to='" + to + '\'' +
                ", content='" + content + '\'' +
                ", isUnread=" + isUnread +
                ", time='" + time + '\'' +
                ", user=" + user +
                '}';
    }
}
