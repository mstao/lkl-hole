package com.lkl.hole.facade.service;

import com.lkl.hole.facade.model.Image;

import java.util.List;

/**
 * @Author: mingshan
 * @Date: Created in 16:43 2018/5/13
 */
public interface ImageServcie {

    /**
     * 上传图片
     */
    void add(List<Image> images);
}
