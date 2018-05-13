package com.lkl.hole.facade.service;

import com.github.pagehelper.PageInfo;
import com.lkl.hole.facade.model.Blog;

/**
 * @Author: mingshan
 * @Date: Created in 16:32 2018/5/13
 */
public interface BlogService {

    /**
     * 分页获取数据
     *
     * @param pageNumber
     * @param pageSize
     * @return
     */
    PageInfo<Blog> findAll(int pageNumber, int pageSize);

    /**
     * 获取单条信息
     *
     * @param bid
     * @return
     */
    Blog getById(Long bid);

    /**
     * 点赞
     *
     * @param bid
     */
    void increaseLikeNum(Long bid);

    /**
     * 删除
     *
     * @param bid
     */
    void delete(Long bid);


    /**
     * 发布
     *
     * @param blog
     */
    Long add(Blog blog);
}
