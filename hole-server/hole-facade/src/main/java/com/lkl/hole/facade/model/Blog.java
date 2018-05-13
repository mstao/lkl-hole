package com.lkl.hole.facade.model;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * @Author: mingshan
 * @Date: Created in 15:38 2018/5/13
 */
public class Blog implements Serializable {
    private Long id;
    private Long uid;
    private String text;
    private String device;
    private Date gmtCreate;
    private Boolean isFixed;
    private Boolean like;
    private Integer likeNum;
    private Integer commentNum;
    private Boolean isAnonymous;
    private Boolean is_deleted;

    private List<Image> images;
    private Location location;
    private User user;
    private List<Comment> comments;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUid() {
        return uid;
    }

    public void setUid(Long uid) {
        this.uid = uid;
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

    public Date getGmtCreate() {
        return gmtCreate;
    }

    public void setGmtCreate(Date gmtCreate) {
        this.gmtCreate = gmtCreate;
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

    public Boolean getIs_deleted() {
        return is_deleted;
    }

    public void setIs_deleted(Boolean is_deleted) {
        this.is_deleted = is_deleted;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    @Override
    public String toString() {
        return "Blog{" +
                "id=" + id +
                ", uid=" + uid +
                ", text='" + text + '\'' +
                ", device='" + device + '\'' +
                ", gmtCreate=" + gmtCreate +
                ", isFixed=" + isFixed +
                ", like=" + like +
                ", likeNum=" + likeNum +
                ", commentNum=" + commentNum +
                ", isAnonymous=" + isAnonymous +
                ", is_deleted=" + is_deleted +
                ", images=" + images +
                ", location=" + location +
                ", user=" + user +
                ", comments=" + comments +
                '}';
    }
}
