package com.lkl.hole.web.vo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.Arrays;

/**
 * @Author: mingshan
 * @Date: Created in 13:47 2018/5/25
 */
public class ResponseUserVO implements Serializable {
    private static final long serialVersionUID = -3950768360027617896L;

    private Long id;
    private String openid;
    private String content;
    private String[] images;
    @JsonProperty("isAnonymous")
    private Integer anonymous;
    private String device;
    private Integer likes;
    private Integer comments;
    private String time;
    private Integer block;
    @JsonProperty("isDeleted")
    private Integer deleted;
    private String location;
    private String latitude;
    private String longitude;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String[] getImages() {
        return images;
    }

    public void setImages(String[] images) {
        this.images = images;
    }

    public Integer getAnonymous() {
        return anonymous;
    }

    public void setAnonymous(Integer anonymous) {
        this.anonymous = anonymous;
    }

    public String getDevice() {
        return device;
    }

    public void setDevice(String device) {
        this.device = device;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }

    public Integer getComments() {
        return comments;
    }

    public void setComments(Integer comments) {
        this.comments = comments;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Integer getBlock() {
        return block;
    }

    public void setBlock(Integer block) {
        this.block = block;
    }

    public Integer getDeleted() {
        return deleted;
    }

    public void setDeleted(Integer deleted) {
        this.deleted = deleted;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    @Override
    public String toString() {
        return "ResponseUserVO{" +
                "id=" + id +
                ", openid='" + openid + '\'' +
                ", content='" + content + '\'' +
                ", images=" + Arrays.toString(images) +
                ", anonymous=" + anonymous +
                ", device='" + device + '\'' +
                ", likes=" + likes +
                ", comments=" + comments +
                ", time='" + time + '\'' +
                ", block=" + block +
                ", deleted=" + deleted +
                ", location='" + location + '\'' +
                ", latitude='" + latitude + '\'' +
                ", longitude='" + longitude + '\'' +
                '}';
    }
}
