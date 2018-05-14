package com.lkl.hole.web.vo;

import java.io.Serializable;
import java.util.List;

/**
 * @Author: mingshan
 * @Date: Created in 17:24 2018/5/14
 */
public class ResponseNotificationVO implements Serializable {
    private static final long serialVersionUID = 8708625333815579602L;
    private List<NotificationVO> unreadMessages;
    private Long unreadMessagesCount;

    public List<NotificationVO> getUnreadMessages() {
        return unreadMessages;
    }

    public void setUnreadMessages(List<NotificationVO> unreadMessages) {
        this.unreadMessages = unreadMessages;
    }

    public Long getUnreadMessagesCount() {
        return unreadMessagesCount;
    }

    public void setUnreadMessagesCount(Long unreadMessagesCount) {
        this.unreadMessagesCount = unreadMessagesCount;
    }
}
