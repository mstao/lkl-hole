package com.lkl.hole.web.vo;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

/**
 * @Author: mingshan
 * @Date: Created in 14:43 2018/5/14
 */
public class BlogVO implements Serializable {
    private static final long serialVersionUID = -3761938885307323024L;

    private Long id;
    private String text;
    private String device;
    @JsonProperty("isFixed")
    private Boolean fixed;
    private Boolean like;
    private Integer likeNum;
    private Integer commentNum;
    @JsonProperty("isAnonymous")
    private Boolean anonymous;
    private String time;

    private String[] images;
    private LocationVO location;
    private UserVO user;
    private List<BlogCommentVO> comments;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getDevice() {
        return device;
    }

    public void setDevice(String device) {
        this.device = device;
    }

    public Boolean getFixed() {
        return fixed;
    }

    public void setFixed(Boolean fixed) {
        this.fixed = fixed;
    }

    public Boolean getLike() {
        return like;
    }

    public void setLike(Boolean like) {
        this.like = like;
    }

    public Integer getLikeNum() {
        return likeNum;
    }

    public void setLikeNum(Integer likeNum) {
        this.likeNum = likeNum;
    }

    public Integer getCommentNum() {
        return commentNum;
    }

    public void setCommentNum(Integer commentNum) {
        this.commentNum = commentNum;
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

    public String[] getImages() {
        return images;
    }

    public void setImages(String[] images) {
        this.images = images;
    }

    public LocationVO getLocation() {
        return location;
    }

    public void setLocation(LocationVO location) {
        this.location = location;
    }

    public UserVO getUser() {
        return user;
    }

    public void setUser(UserVO user) {
        this.user = user;
    }

    public List<BlogCommentVO> getComments() {
        return comments;
    }

    public void setComments(List<BlogCommentVO> comments) {
        this.comments = comments;
    }

    @Override
    public String toString() {
        return "BlogVO{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", device='" + device + '\'' +
                ", fixed=" + fixed +
                ", like=" + like +
                ", likeNum=" + likeNum +
                ", commentNum=" + commentNum +
                ", anonymous=" + anonymous +
                ", time='" + time + '\'' +
                ", images=" + Arrays.toString(images) +
                ", location=" + location +
                ", user=" + user +
                ", comments=" + comments +
                '}';
    }
}
