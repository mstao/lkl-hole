package com.lkl.hole.facade.service;

import com.github.pagehelper.PageInfo;
import com.lkl.hole.facade.model.Blog;

import java.util.List;

/**
 * @Author: mingshan
 * @Date: Created in 16:32 2018/5/13
 */
public interface BlogService {

    /**
     * 分页获取数据
     *
     * @param pageNum
     * @param pageSize
     * @return
     */
    PageInfo<Blog> findAll(Integer pageNum, Integer pageSize);

    /**
     * 获取单条信息
     *
     * @param id
     * @return
     */
    Blog getById(Long id);

    /**
     * 点赞
     *
     * @param id
     */
    void increaseLikeNum(Long id);

    /**
     * 删除
     *
     * @param id
     */
    void delete(Long id);


    /**
     * 发布
     *
     * @param blog
     */
    Long add(Blog blog);

    /**
     * 个人信息界面获取用户发表过的树洞
     *
     * @return
     */
    PageInfo<Blog> findByUser(String openId, Integer pageNum, Integer pageSize);
}
