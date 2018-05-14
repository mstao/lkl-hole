package com.lkl.hole.web.controller;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageInfo;
import com.lkl.hole.common.annotation.Authorization;
import com.lkl.hole.facade.model.Notification;
import com.lkl.hole.facade.model.User;
import com.lkl.hole.facade.service.NotificationService;
import com.lkl.hole.facade.service.UserService;
import com.lkl.hole.web.constant.Pagination;
import com.lkl.hole.web.util.RelativeDateFormat;
import com.lkl.hole.web.vo.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.dozer.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

/**
 * @Author: mingshan
 * @Date: Created in 15:59 2018/5/14
 */
@Api(value = "notifications")
@RestController
@RequestMapping("/v2")
public class NotificationController extends BaseController {
    @Autowired
    private NotificationService notificationService;

    @Autowired
    private UserService userService;

    @Autowired
    private Mapper mapper;

    @RequestMapping(value = "/notifications", method = RequestMethod.GET)
    @ApiOperation(value="获取通知数", httpMethod="GET", notes="")
    @Authorization
    @ApiImplicitParams({
            @ApiImplicitParam(name = "x-wechat-session", value = "登陆时颁发的 session", required = true, dataType = "String",
                    paramType = "header")
    })
    public ResponseEntity<ResultVO> getNotifications(HttpServletRequest request) {
        String openId = (String) request.getAttribute("openId");
        int count = notificationService.getCount(openId);
        NotificationCountVO countVO = new NotificationCountVO();
        countVO.setUnreadMessagesCount(count);

        ResultVO resultVO = new ResultVO(0, "", countVO);
        return new ResponseEntity<>(resultVO, HttpStatus.OK);
    }

    /**
     *
     * @return
     */
    @RequestMapping(value = "/notifications/messages", method = RequestMethod.GET)
    @ApiOperation(value="获取详细通知", httpMethod="GET", notes="")
    @Authorization
    @ApiImplicitParams({
            @ApiImplicitParam(name = "x-wechat-session", value = "登陆时颁发的 session", required = true, dataType = "String",
                    paramType = "header")
    })
    public ResponseEntity<ResultVO> getMessages(@RequestParam(name = "page", defaultValue = "1") Integer page, HttpServletRequest request) {
        String openId = (String) request.getAttribute("openId");
        User user = userService.findByOpenId(openId);

        PageInfo<Notification> pageInfo = notificationService.findAll(page, Pagination.PAGE_SIZE, openId);
        Long unreadMessagesCount = pageInfo.getTotal();

        List<Notification> notificationList = pageInfo.getList();
        List<NotificationVO> notificationVOList = new ArrayList<>();

        if (notificationList != null) {
            for (Notification notification : notificationList) {
                NotificationVO notificationVO = mapper.map(notification, NotificationVO.class);
                notificationVO.setTime(RelativeDateFormat.format(notification.getGmtCreate()));
                UserVO userVO = new UserVO();
                userVO.setUid(user.getUid());
                userVO.setAvatar(user.getAvatarUrl());
                userVO.setNickname(user.getNickName());
                userVO.setGender(user.getGender());
                userVO.setOpenid(user.getOpenId());
                notificationVO.setUser(userVO);

                notificationVOList.add(notificationVO);
            }
        }

        ResponseNotificationVO responseNotificationVO = new ResponseNotificationVO();
        responseNotificationVO.setUnreadMessages(notificationVOList);
        responseNotificationVO.setUnreadMessagesCount(unreadMessagesCount);

        ResultVO resultVO = new ResultVO(0, "", responseNotificationVO);
        return new ResponseEntity<>(resultVO, HttpStatus.OK);
    }

    /**
     * 标记通知为已读
     *
     * @param id
     * @return
     */
    @RequestMapping(value = "/notifications/{id}", method = RequestMethod.PUT)
    @ApiOperation(value="标记通知为已读", httpMethod="PUT", notes="")
    @Authorization
    @ApiImplicitParams({
            @ApiImplicitParam(name = "x-wechat-session", value = "登陆时颁发的 session", required = true, dataType = "String",
                    paramType = "header")
    })
    public ResponseEntity<ResultVO> markRead(@PathVariable Long id) {
        notificationService.markRead(id);

        ResultVO resultVO = new ResultVO(0, "", 1);
        return new ResponseEntity<>(resultVO, HttpStatus.OK);
    }

}
