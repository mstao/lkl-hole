package com.lkl.hole.service.dao;

import com.lkl.hole.facade.model.Blog;
import org.apache.ibatis.annotations.Param;

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
     * @param id
     * @return
     */
    Blog selectByPrimaryKey(Long id);

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
    Long insert(Blog blog);


    /**
     * 个人信息界面获取用户发表过的树洞
     *
     * @return
     */
    List<Blog> selectByUser(@Param("openId") String openId);
}
