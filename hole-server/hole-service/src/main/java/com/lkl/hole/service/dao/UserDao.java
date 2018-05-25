package com.lkl.hole.service.dao;

import com.lkl.hole.facade.model.User;

/**
 * @Author: mingshan
 * @Date: Created in 16:37 2018/5/11
 */
public interface UserDao {
    /**
     * 根据openid查询用户
     *
     * @param openid
     * @return
     */
    User selectByOpenId(String openid);

    /**
     * 根据主键id查找user
     *
     * @param id
     * @return
     */
    User selectByPrimaryKey(Long id);

    /**
     * 更新用户信息
     *
     * @param user
     * @return
     */
    int update(User user);

    /**
     * 插入用户
     *
     * @param user
     * @return
     */
    int insert(User user);
}
