package com.lkl.hole.service.dao;

import com.lkl.hole.facade.model.Blog;
import com.lkl.hole.facade.model.Comment;
import com.lkl.hole.facade.model.Notification;
import org.apache.ibatis.annotations.Param;

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
    int selectCount(@Param("openId") String openId);


    /**
     * select by paignation.
     *
     * @return
     */
    List<Notification> selectByPage(@Param("openId") String openId);


    /**
     * 插入通知
     *
     * @param notification
     */
    void insert(Notification notification);

    /**
     * 标记通知为已读
     *
     * @param id
     */
    void markRead(Long id);
}
