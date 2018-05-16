package com.lkl.hole.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.lkl.hole.facade.model.Blog;
import com.lkl.hole.facade.model.Notification;
import com.lkl.hole.facade.service.NotificationService;
import com.lkl.hole.service.dao.NotificationDao;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author: mingshan
 * @Date: Created in 0:15 2018/5/14
 */
@Service
public class NotificationServiceImpl implements NotificationService {
    @Autowired
    private NotificationDao notificationDao;

    @Override
    public int getCount(String openId) {
        return notificationDao.selectCount(openId);
    }

    @Override
    public PageInfo<Notification> findAll(String openId, int pageNum, int pageSize) {
        PageHelper.startPage(pageNum, pageSize, "gmt_create desc");
        List<Notification> notifications = notificationDao.selectByPage(openId);
        PageInfo<Notification> page = new PageInfo<>(notifications);
        return page;
    }

    @Override
    public void add(Notification notification) {
        notificationDao.insert(notification);
    }

    @Override
    public void markRead(Long id) {
        notificationDao.markRead(id);
    }
}
