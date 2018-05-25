package com.lkl.hole.facade.service;

import com.lkl.hole.facade.model.Comment;

/**
 * @Author: mingshan
 * @Date: Created in 16:47 2018/5/13
 */
public interface CommentService {

    /**
     * 添加新评论
     *
     * @param comment
     */
    Long add(Comment comment, String from, String replyTo);

    /**
     * 删除评论
     *
     * @param id
     */
    void delete(Long id);
}
