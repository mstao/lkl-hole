package com.lkl.hole.service.impl;

import com.lkl.hole.facade.model.Comment;
import com.lkl.hole.facade.service.CommentService;
import com.lkl.hole.service.dao.CommentDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @Author: mingshan
 * @Date: Created in 23:44 2018/5/13
 */
@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentDao commentDao;

    @Override
    public Long add(Comment comment) {
        commentDao.insert(comment);
        return commentDao.insert(comment);
    }

    @Override
    public void delete(Long id) {
        commentDao.delete(id);
    }
}
