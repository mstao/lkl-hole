package com.lkl.hole.service.dao;

import com.lkl.hole.facade.model.Blog;
import com.lkl.hole.facade.model.Comment;
import com.lkl.hole.facade.model.Notification;

import java.util.List;

/**
 * @Author: mingshan
 * @Date: Created in 20:27 2018/5/13
 */
public interface NotificationDao {

    /**
     * 获取数量
     *
     * @return
     */
    int selectCount();


    /**
     * select by paignation.
     *
     * @return
     */
    List<Blog> selectByPage();


    /**
     * 插入
     *
     * @param notification
     */
    void insert(Notification notification);
}
