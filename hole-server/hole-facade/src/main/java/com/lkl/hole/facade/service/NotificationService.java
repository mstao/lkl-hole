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
    int getCount(Long openId);

    /**
     * 分页获取数据
     *
     * @param pageNumber
     * @param pageSize
     * @return
     */
    PageInfo<Notification> findAll(int pageNumber, int pageSize);
}
