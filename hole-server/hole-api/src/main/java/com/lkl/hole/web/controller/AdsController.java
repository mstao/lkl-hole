package com.lkl.hole.web.controller;

import com.lkl.hole.web.vo.ResultVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * 广告
 * @Author: mingshan
 * @Date: Created in 15:31 2018/5/13
 */
@Api(value = "ads")
@RestController
@RequestMapping("/v2")
public class AdsController extends BaseController {

    @RequestMapping(value = "/ads/{id}", method = RequestMethod.GET)
    @ApiOperation(value="Get ads", httpMethod="GET", notes="获取广告信息")
    public ResponseEntity<ResultVO> getAds(@PathVariable Long id) {
        ResultVO resultVO = new ResultVO(0, "", "");
        return new ResponseEntity<>(resultVO, HttpStatus.OK);
    }
}
