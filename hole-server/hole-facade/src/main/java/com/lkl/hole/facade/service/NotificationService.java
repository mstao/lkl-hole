package com.lkl.hole.facade.service;

import com.github.pagehelper.PageInfo;
import com.lkl.hole.facade.model.Notification;

/**
 * @Author: mingshan
 * @Date: Created in 16:50 2018/5/13
 */
public interface NotificationService {

    /**
     *
     * 获取数量
     *
     * @return
     */
    int getCount(String openId);

    /**
     * 分页获取数据
     *
     * @param pageNum
     * @param pageSize
     * @return
     */
    PageInfo<Notification> findAll(String openId, int pageNum, int pageSize);

    /**
     * 插入通知
     *
     * @param notification
     */
    void add(Notification notification);

    /**
     * 标记通知为已读
     *
     * @param id
     */
    void markRead(Long id);
}
