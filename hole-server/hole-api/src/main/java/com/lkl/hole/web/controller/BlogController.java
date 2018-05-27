package com.lkl.hole.web.controller;

import com.github.pagehelper.PageInfo;
import com.google.gson.Gson;
import com.lkl.hole.common.annotation.Authorization;
import com.lkl.hole.facade.model.*;
import com.lkl.hole.facade.service.BlogService;
import com.lkl.hole.facade.service.UserService;
import com.lkl.hole.web.config.Constants;
import com.lkl.hole.web.constant.Pagination;
import com.lkl.hole.web.util.RelativeDateFormat;
import com.lkl.hole.web.vo.*;
import com.qiniu.common.QiniuException;
import com.qiniu.common.Zone;
import com.qiniu.http.Response;
import com.qiniu.storage.Configuration;
import com.qiniu.storage.UploadManager;
import com.qiniu.storage.model.DefaultPutRet;
import com.qiniu.util.Auth;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.dozer.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * @Author: mingshan
 * @Date: Created in 15:34 2018/5/13
 */
@Api(value = "blogs")
@RestController
@RequestMapping("/v2")
public class BlogController extends BaseController {

    @Autowired
    private BlogService blogService;

    @Autowired
    private UserService userService;

    @Autowired
    private Mapper mapper;

    /**
     * 获取小秘密列表
     *
     * @param page 分页参数
     * @param version 版本信息
     * @return 小秘密列表
     */
    @RequestMapping(value = "/blogs", method = RequestMethod.GET)
    @ApiOperation(value="小秘密列表", httpMethod="GET", notes="获取小秘密列表")
    @Authorization
    @ApiImplicitParams({
            @ApiImplicitParam(name = "x-wechat-session", value = "登陆时颁发的 session", required = true, dataType = "String",
                    paramType = "header")
    })
    public ResponseEntity<ResultVO> getBlogs(@RequestParam(name = "page") Integer page,
                                             @RequestParam Integer version) {
        PageInfo<Blog> pageInfo = blogService.findAll(page, Pagination.PAGE_SIZE);
        List<Blog> blogs = pageInfo.getList();
        List<BlogsVO> blogsVOs = new ArrayList<>();

        if (blogs != null) {
            for (Blog blog : blogs) {
                BlogsVO blogsVO = mapper.map(blog, BlogsVO.class);
                // 获取image
                List<Image> images = blog.getImages();

                if (images != null) {
                    List<String> urls = new ArrayList<>();
                    for (Image image : images) {
                        urls.add(image.getUrl());
                    }
                    blogsVO.setImages(urls.toArray(new String[images.size()]));
                }

                // 获取location
                Location location = blog.getLocation();
                if (location != null) {
                    LocationVO locationVO = mapper.map(location, LocationVO.class);
                    blogsVO.setLocation(locationVO);
                }

                // 获取用户
                UserVO userVO = new UserVO();
                User user = blog.getUser();
                userVO.setUid(user.getUid());
                // 匿名处理
                if (blog.getAnonymous()) {
                    userVO.setNickname(Constants.ANONYMOUS_NAME);
                } else {
                    userVO.setNickname(user.getNickName());
                    userVO.setAvatar(user.getAvatarUrl());
                }

                userVO.setGender(user.getGender());
                userVO.setOpenid(user.getOpenId());
                userVO.setAdmin(user.getAdmin());
                userVO.setAuthor(user.getAuthor());
                userVO.setVerified(user.getVerified());
                blogsVO.setUser(userVO);

                // 时间转换
                blogsVO.setTime(RelativeDateFormat.format(blog.getGmtCreate()));

                // 添加到list
                blogsVOs.add(blogsVO);
            }
        }

        ResultVO resultVO = new ResultVO(0, "", blogsVOs);

        return new ResponseEntity<>(resultVO, HttpStatus.OK);
    }


    /**
     * 获取单条小秘密详细信息
     *
     * @param id 小秘密id
     * @return 单条小秘密详细信息
     */
    @RequestMapping(value = "/blogs/{id}", method = RequestMethod.GET)
    @ApiOperation(value="获取单条小秘密详细信息", httpMethod="GET", notes="获取单条小秘密详细信息")
    @Authorization
    @ApiImplicitParams({
            @ApiImplicitParam(name = "x-wechat-session", value = "登陆时颁发的 session", required = true, dataType = "String",
                    paramType = "header")
    })
    public ResponseEntity<ResultVO> getById(@PathVariable Long id) {
        Blog blog = blogService.getById(id);
        BlogVO blogVO = new BlogVO();
        if (blog != null) {
            blogVO = mapper.map(blog, BlogVO.class);
            // 获取image
            List<Image> images = blog.getImages();

            if (images != null) {
                List<String> urls = new ArrayList<>();
                for (Image image : images) {
                    urls.add(image.getUrl());
                }
                blogVO.setImages(urls.toArray(new String[images.size()]));
            }

            // 获取location
            Location location = blog.getLocation();
            if (location != null) {
                LocationVO locationVO = mapper.map(location, LocationVO.class);
                blogVO.setLocation(locationVO);
            }

            // 获取用户
            UserVO userVO = new UserVO();
            User user = blog.getUser();
            userVO.setUid(user.getUid());
            // 匿名处理
            if (blog.getAnonymous()) {
                userVO.setNickname(Constants.ANONYMOUS_NAME);
            } else {
                userVO.setNickname(user.getNickName());
                userVO.setAvatar(user.getAvatarUrl());
            }

            userVO.setGender(user.getGender());
            userVO.setOpenid(user.getOpenId());
            userVO.setAdmin(user.getAdmin());
            userVO.setAuthor(user.getAuthor());
            userVO.setVerified(user.getVerified());
            blogVO.setUser(userVO);

            // 时间转换
            blogVO.setTime(RelativeDateFormat.format(blog.getGmtCreate()));

            // 评论
            List<Comment> comments = blog.getComments();
            if (comments != null) {
                List<BlogCommentVO> blogCommentVOs = new ArrayList<>();
                for (Comment comment: comments) {
                    Long userId = comment.getUid();
                    User user1 = userService.findById(userId);
                    BlogCommentVO blogCommentVO = new BlogCommentVO();
                    if (user1 != null) {
                        blogCommentVO.setOpenid(user1.getOpenId());
                        if (comment.getAnonymous()) {
                            blogCommentVO.setAvatar("");
                            blogCommentVO.setNickname(Constants.ANONYMOUS_NAME);
                        } else {
                            blogCommentVO.setAvatar(user1.getAvatarUrl());
                            blogCommentVO.setNickname(user1.getNickName());
                        }

                        blogCommentVO.setUid(user1.getUid());
                        blogCommentVO.setAdmin(user1.getAdmin());
                        blogCommentVO.setAuthor(user1.getAuthor());
                    }

                    blogCommentVO.setCid(comment.getId());
                    blogCommentVO.setContent(comment.getContent());
                    blogCommentVO.setAnonymous(comment.getAnonymous());

                    // 添加到集合
                    blogCommentVOs.add(blogCommentVO);
                }

                blogVO.setComments(blogCommentVOs);
            }
        }

        ResultVO resultVO = new ResultVO(0, "", blogVO);
        return new ResponseEntity<>(resultVO, HttpStatus.OK);
    }


    /**
     * 点赞
     *
     * @param blogIdVO 封装的实体
     * @return {}
     */
    @RequestMapping(value = "/blog/like", method = RequestMethod.POST)
    @ApiOperation(value="点赞", httpMethod="POST", notes="")
    @Authorization
    @ApiImplicitParams({
            @ApiImplicitParam(name = "x-wechat-session", value = "登陆时颁发的 session", required = true, dataType = "String",
                    paramType = "header")
    })
    public ResponseEntity<ResultVO> like(@RequestBody BlogIdVO blogIdVO) {
        blogService.increaseLikeNum(blogIdVO.getBid());

        EmptyVO vo = new EmptyVO();
        ResultVO resultVO = new ResultVO(0, "", vo);
        return new ResponseEntity<>(resultVO, HttpStatus.OK);
    }


    /**
     * 删除
     *
     * @param blogIdVO 封装的实体
     * @return {}
     */
    @RequestMapping(value = "/blog/delete", method = RequestMethod.POST)
    @ApiOperation(value="删除", httpMethod="POST", notes="")
    @Authorization
    @ApiImplicitParams({
            @ApiImplicitParam(name = "x-wechat-session", value = "登陆时颁发的 session", required = true, dataType = "String",
                    paramType = "header")
    })
    public ResponseEntity<ResultVO> delete(@RequestBody BlogIdVO blogIdVO) {
        blogService.delete(blogIdVO.getBid());
        EmptyVO vo = new EmptyVO();
        ResultVO resultVO = new ResultVO(0, "", vo);
        return new ResponseEntity<>(resultVO, HttpStatus.OK);
    }

    /**
     * 发布新小秘密
     *
     * @param requestBlogVO 小秘密实体
     * @return {}
     */
    @RequestMapping(value = "/blogs", method = RequestMethod.POST)
    @ApiOperation(value="发布新树洞", httpMethod="POST", notes="")
    @Authorization
    @ApiImplicitParams({
            @ApiImplicitParam(name = "x-wechat-session", value = "登陆时颁发的 session", required = true, dataType = "String",
                    paramType = "header")
    })
    public ResponseEntity<ResultVO> add(@RequestBody RequestBlogVO requestBlogVO, HttpServletRequest request) {
        String openId = (String) request.getAttribute("openId");
        User user = userService.findByOpenId(openId);

        Blog blog = new Blog();
        blog.setUid(user.getUid());
        blog.setText(requestBlogVO.getContent());
        blog.setDevice(requestBlogVO.getDevice());
        blog.setAnonymous(requestBlogVO.getAnonymous());

        List<Image> images = new ArrayList<>();

        String[] urls = requestBlogVO.getImages();
        if (urls.length > 0) {
            for (String url : urls) {
                Image image = new Image();
                image.setUrl(url);
                images.add(image);
            }
        }

        blog.setImages(images);

        Location location = new Location();
        location.setLocationName(requestBlogVO.getLocation());
        location.setLatitude(requestBlogVO.getLatitude());
        location.setLongitude(requestBlogVO.getLongitude());

        blog.setLocation(location);

        blogService.add(blog);

        EmptyVO vo = new EmptyVO();
        ResultVO resultVO = new ResultVO(0, "", vo);
        return new ResponseEntity<>(resultVO, HttpStatus.OK);
    }

    /**
     * 上传图片
     *
     * @param file 要上传的文件
     * @param request
     * @return
     * @throws ServletException
     * @throws IOException
     */
    @RequestMapping(value = "/blog/image", method = RequestMethod.POST)
    @ApiOperation(value="上传图片", httpMethod="POST", notes="")
    @Authorization
    @ApiImplicitParams({
            @ApiImplicitParam(name = "x-wechat-session", value = "登陆时颁发的 session", required = true, dataType = "String",
                    paramType = "header")
    })
    public ResponseEntity<ResultVO> uploadPic(MultipartFile file, HttpServletRequest request)
            throws ServletException, IOException {

        Configuration cfg = new Configuration(Zone.zone0());
        UploadManager uploadManager = new UploadManager(cfg);
        String fi = file.getOriginalFilename();
        // 提取文件拓展名
        String fileNameExtension = fi.substring(fi.lastIndexOf("."), fi.length());
        // 生成实际存储的真实文件名
        String key = UUID.randomUUID().toString() + fileNameExtension;
        String url = "";

        try {
            Auth auth = Auth.create(Constants.QINIU_ACCESS_KEY, Constants.QINIU_SECRET_KEY);
            String upToken = auth.uploadToken(Constants.QINIU_UPLOAD_TOKEN);
            try {
                Response response = uploadManager.put(file.getInputStream(), key, upToken,null, null);
                //解析上传成功的结果
                DefaultPutRet putRet = new Gson().fromJson(response.bodyString(), DefaultPutRet.class);
                url = Constants.QINIU_UPLOAD_URL + "/" + putRet.key;
            } catch (QiniuException ex) {
                Response r = ex.response;
                System.err.println(r.toString());
                try {
                    System.err.println(r.bodyString());
                } catch (QiniuException ex2) {
                    //ignore
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        } catch (Exception ex) {
            //ignore
            logger.error("Uploads {} occurs error.", key);
        }

        UploadImageVO imageVO = new UploadImageVO();
        imageVO.setUrl(url);
        ResultVO resultVO = new ResultVO(0, "", imageVO);
        return new ResponseEntity<>(resultVO, HttpStatus.OK);
    }
}
