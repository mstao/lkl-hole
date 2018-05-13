package com.lkl.hole.service.dao;

import com.lkl.hole.facade.model.Blog;

import java.util.List;

/**
 * @Author: mingshan
 * @Date: Created in 16:58 2018/5/13
 */
public interface BlogDao {

    /**
     * select by paignation.
     *
     * @return
     */
    List<Blog> selectByPage();

    /**
     * 获取单条信息
     *
     * @param bid
     * @return
     */
    Blog selectByPrimaryKey(Long bid);

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
    Long insert(Blog blog);
}
