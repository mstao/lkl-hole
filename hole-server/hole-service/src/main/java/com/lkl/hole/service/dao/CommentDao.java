package com.lkl.hole.service.dao;

import com.lkl.hole.facade.model.Comment;

/**
 * @Author: mingshan
 * @Date: Created in 20:54 2018/5/13
 */
public interface CommentDao {

    /**
     * 插入评论
     *
     * @param comment
     * @return
     */
    int insert(Comment comment);

    /**
     * 删除评论
     *
     * @param cid
     */
    void delete(Long cid);
}
