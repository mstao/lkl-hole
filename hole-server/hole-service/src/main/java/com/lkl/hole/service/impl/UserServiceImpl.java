package com.lkl.hole.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.lkl.hole.common.util.AES;
import com.lkl.hole.common.util.StringUtil;
import com.lkl.hole.facade.model.User;
import com.lkl.hole.facade.service.UserService;
import com.lkl.hole.service.dao.UserDao;
import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.InvalidAlgorithmParameterException;

/**
 * @Author: mingshan
 * @Date: Created in 15:57 2018/5/11
 */
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Override
    public User findByOpenId(String openid) {
        return userDao.findByOpenId(openid);
    }

    @Override
    public int update(User user) {
        return userDao.update(user);
    }

    @Override
    public int insert(User user) {
        return userDao.insert(user);
    }

    @Override
    public User decodeInfo(String encryptedData, String iv, String sessionKey) {
        try {
            byte[] resultByte = AES.decrypt(Base64.decodeBase64(StringUtil.strToByteArray(encryptedData)),
                    Base64.decodeBase64(StringUtil.strToByteArray(sessionKey)),
                    Base64.decodeBase64(StringUtil.strToByteArray(iv)));
            if (null != resultByte && resultByte.length > 0) {
                String userInfo = new String(resultByte, "UTF-8");
                System.out.println("decode user: " + userInfo);
                User user;
                ObjectMapper objectMapper = new ObjectMapper();
                try {
                    user = objectMapper.readValue(userInfo, User.class);
                    return user;
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        } catch (InvalidAlgorithmParameterException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
