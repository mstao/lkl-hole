package com.lkl.hole.web.vo;

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
    private Boolean isFixed;
    private Boolean like;
    private Integer likeNum;
    private Integer commentNum;
    private Boolean isAnonymous;
    private String time;

    private String[] images;
    private LocationVO location;
    private UserVO userVO;
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
        return isFixed;
    }

    public void setFixed(Boolean fixed) {
        isFixed = fixed;
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
        return isAnonymous;
    }

    public void setAnonymous(Boolean anonymous) {
        isAnonymous = anonymous;
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

    public UserVO getUserVO() {
        return userVO;
    }

    public void setUserVO(UserVO userVO) {
        this.userVO = userVO;
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
                ", isFixed=" + isFixed +
                ", like=" + like +
                ", likeNum=" + likeNum +
                ", commentNum=" + commentNum +
                ", isAnonymous=" + isAnonymous +
                ", time='" + time + '\'' +
                ", images=" + Arrays.toString(images) +
                ", location=" + location +
                ", userVO=" + userVO +
                ", comments=" + comments +
                '}';
    }
}
