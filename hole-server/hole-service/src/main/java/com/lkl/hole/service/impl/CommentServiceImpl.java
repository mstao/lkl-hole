package com.lkl.hole.service.impl;

import com.lkl.hole.facade.model.Comment;
import com.lkl.hole.facade.model.Notification;
import com.lkl.hole.facade.model.User;
import com.lkl.hole.facade.service.CommentService;
import com.lkl.hole.service.dao.BlogDao;
import com.lkl.hole.service.dao.CommentDao;
import com.lkl.hole.service.dao.NotificationDao;
import com.lkl.hole.service.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

/**
 * @Author: mingshan
 * @Date: Created in 23:44 2018/5/13
 */
@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentDao commentDao;

    @Autowired
    private BlogDao blogDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private NotificationDao notificationDao;

    @Override
    public Long add(Comment comment, String from, String replyTo) {
        commentDao.insert(comment);
        blogDao.increaseCommentNum(comment.getBid());

        // 通知;
        if (!StringUtils.isEmpty(replyTo)) {
            Notification notification = new Notification();

            notification.setBid(comment.getBid());
            notification.setCid(comment.getId());
            User replyUser = userDao.selectByOpenId(replyTo);
            notification.setContent("回复 " + replyUser.getNickName() + ": " + comment.getContent());
            notification.setTo(replyTo);
            notification.setFrom(from);
            notificationDao.insert(notification);
        }
        return comment.getId();
    }

    @Override
    public void delete(Long id) {
        commentDao.delete(id);
    }
}
