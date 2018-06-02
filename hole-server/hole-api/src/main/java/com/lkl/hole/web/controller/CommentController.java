package com.lkl.hole.web.controller;

import com.lkl.hole.common.annotation.Authorization;
import com.lkl.hole.facade.model.Comment;
import com.lkl.hole.facade.model.User;
import com.lkl.hole.facade.service.CommentService;
import com.lkl.hole.facade.service.UserService;
import com.lkl.hole.web.vo.EmptyVO;
import com.lkl.hole.web.vo.RequestCommentVO;
import com.lkl.hole.web.vo.ResultVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

/**
 * @Author: mingshan
 * @Date: Created in 15:11 2018/5/14
 */
@Api(value = "comments")
@RestController
@RequestMapping("/v2")
public class CommentController extends BaseController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private UserService userService;

    /**
     * 发送评论
     *
     * @param commentVO
     * @param request
     * @return
     */
    @RequestMapping(value = "/comments", method = RequestMethod.POST)
    @ApiOperation(value="发送评论", httpMethod="POST", notes="发送评论")
    @Authorization
    @ApiImplicitParams({
            @ApiImplicitParam(name = "x-wechat-session", value = "登陆时颁发的 session", required = true, dataType = "String",
                    paramType = "header")
    })
    public ResponseEntity<ResultVO> add(@RequestBody RequestCommentVO commentVO, HttpServletRequest request) {
        String openId = (String) request.getAttribute("openId");
        User user = userService.findByOpenId(openId);

        Comment comment = new Comment();
        comment.setUid(user.getUid());
        comment.setBid(commentVO.getBid());
        comment.setContent(commentVO.getContent());
        comment.setAnonymous(commentVO.getAnonymous());

        commentService.add(comment, openId, commentVO.getReplyTo());

        EmptyVO vo = new EmptyVO();
        ResultVO resultVO = new ResultVO(0, "", vo);
        return new ResponseEntity<>(resultVO, HttpStatus.OK);
    }

    /**
     * 删除评论
     *
     * @param id
     * @return
     */
    @RequestMapping(value = "/comments/{id}", method = RequestMethod.DELETE)
    @ApiOperation(value="删除评论", httpMethod="DELETE", notes="删除评论")
    @Authorization
    @ApiImplicitParams({
            @ApiImplicitParam(name = "x-wechat-session", value = "登陆时颁发的 session", required = true, dataType = "String",
                    paramType = "header")
    })
    public ResponseEntity<ResultVO> delete(@PathVariable Long id) {
        commentService.delete(id);

        EmptyVO vo = new EmptyVO();
        ResultVO resultVO = new ResultVO(0, "", vo);
        return new ResponseEntity<>(resultVO, HttpStatus.OK);
    }
}
