package com.lkl.hole.web.controller;

import com.lkl.hole.web.vo.ResultVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author: mingshan
 * @Date: Created in 15:34 2018/5/13
 */
@Api(value = "blogs")
@RestController
@RequestMapping("/v2")
public class BlogController extends BaseController {

    @RequestMapping(value = "/blogs", method = RequestMethod.GET)
    @ApiOperation(value="Get blogs", httpMethod="GET", notes="")
    public ResponseEntity<ResultVO> getBlogs() {
        ResultVO resultVO = new ResultVO(0, "", "");
        return new ResponseEntity<>(resultVO, HttpStatus.OK);
    }
}
