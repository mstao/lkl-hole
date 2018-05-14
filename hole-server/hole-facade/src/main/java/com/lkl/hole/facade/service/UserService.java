package com.lkl.hole.facade.service;

import com.lkl.hole.facade.model.User;

/**
 * @Author: mingshan
 * @Date: Created in 15:54 2018/5/11
 */
public interface UserService {

    /**
     * 根据openid查询用户
     *
     * @param openid
     * @return
     */
    User findByOpenId(String openid);

    /**
     * 根据主键查找用户
     *
     * @param id
     * @return
     */
    User findById(Long id);

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

    /**
     * 根据加密信息解析用户
     *
     * @param encryptedData
     * @param iv
     * @param sessionKey
     * @return
     */
    User decodeInfo(String encryptedData,String iv,String sessionKey);

}
