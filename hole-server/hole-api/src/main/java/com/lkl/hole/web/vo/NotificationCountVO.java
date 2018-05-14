package com.lkl.hole.web.vo;

import java.io.Serializable;

/**
 * @Author: mingshan
 * @Date: Created in 16:11 2018/5/14
 */
public class NotificationCountVO implements Serializable {
    private static final long serialVersionUID = 274683668833262711L;
    private int unreadMessagesCount;

    public int getUnreadMessagesCount() {
        return unreadMessagesCount;
    }

    public void setUnreadMessagesCount(int unreadMessagesCount) {
        this.unreadMessagesCount = unreadMessagesCount;
    }

    @Override
    public String toString() {
        return "NotificationCountVO{" +
                "unreadMessagesCount=" + unreadMessagesCount +
                '}';
    }
}
