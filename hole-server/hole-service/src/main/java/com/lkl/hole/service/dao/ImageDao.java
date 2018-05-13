package com.lkl.hole.service.dao;

import com.lkl.hole.facade.model.Image;

import java.util.List;

/**
 * @Author: mingshan
 * @Date: Created in 20:26 2018/5/13
 */
public interface ImageDao {

    /**
     * 批量插入
     *
     * @param images
     */
    void insertBatch(List<Image> images);
}
