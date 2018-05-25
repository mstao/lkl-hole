package com.lkl.hole.web.controller;

import com.github.pagehelper.PageInfo;
import com.lkl.hole.common.annotation.Authorization;
import com.lkl.hole.facade.model.Blog;
import com.lkl.hole.facade.model.Image;
import com.lkl.hole.facade.model.Location;
import com.lkl.hole.facade.model.User;
import com.lkl.hole.facade.service.BlogService;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

/**
 * @Author: mingshan
 * @Date: Created in 16:15 2018/5/15
 */
@Api(value = "users")
@RestController
@RequestMapping("/v2")
public class UserController extends BaseController {

    @Autowired
    private BlogService blogService;

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    @ApiOperation(value="个人信息界面获取用户发表过的树洞", httpMethod="GET", notes="个人信息界面获取用户发表过的树洞")
    public ResponseEntity<ResultVO> getUser(@RequestParam(name = "page") Integer page, HttpServletRequest request) {
        String openId = (String) request.getAttribute("openId");
        PageInfo<Blog> pageInfo = blogService.findByUser(openId, page, Pagination.PAGE_SIZE);
        List<Blog> blogs = pageInfo.getList();
        List<ResponseUserVO> userVOs = new ArrayList<>();

        if (blogs != null) {
            for (Blog blog : blogs) {
                ResponseUserVO userVO = new ResponseUserVO();
                // 设置id
                userVO.setId(blog.getId());
                // 设置content
                userVO.setContent(blog.getText());
                // 设置 likes
                userVO.setLikes(blog.getLikeNum());
                // 设置 comments
                userVO.setComments(blog.getCommentNum());
                userVO.setAnonymous(blog.getAnonymous() ? 1 : 0);
                userVO.setBlock(0);
                userVO.setDeleted(0);
                userVO.setDevice(blog.getDevice());

                // 获取image
                List<Image> images = blog.getImages();

                if (images != null) {
                    List<String> urls = new ArrayList<>();
                    for (Image image : images) {
                        urls.add(image.getUrl());
                    }
                    userVO.setImages(urls.toArray(new String[images.size()]));
                }

                // 获取location
                Location location = blog.getLocation();
                if (location != null) {
                    userVO.setLocation(location.getLocationName());
                    userVO.setLatitude(location.getLatitude());
                    userVO.setLongitude(location.getLongitude());
                }


                // 获取用户
                User user = blog.getUser();

                userVO.setOpenid(user.getOpenId());


                // 时间转换
                userVO.setTime(RelativeDateFormat.format(blog.getGmtCreate()));

                // 添加到list
                userVOs.add(userVO);
            }
        }

        ResultVO resultVO = new ResultVO(0, "", userVOs);

        return new ResponseEntity<>(resultVO, HttpStatus.OK);
    }
}
