package com.lkl.hole.facade.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * @Author: mingshan
 * @Date: Created in 15:38 2018/5/13
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class Blog implements Serializable {
    private static final long serialVersionUID = 8774038020085658304L;

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
    private Boolean isDeleted;

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

    public Boolean getDeleted() {
        return isDeleted;
    }

    public void setDeleted(Boolean deleted) {
        isDeleted = deleted;
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
                ", isDeleted=" + isDeleted +
                ", images=" + images +
                ", location=" + location +
                ", user=" + user +
                ", comments=" + comments +
                '}';
    }
}
