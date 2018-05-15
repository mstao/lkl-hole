package com.lkl.hole.web.controller;

import com.lkl.hole.web.vo.ConfigVO;
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
 * @Author: mingshan
 * @Date: Created in 20:33 2018/5/10
 */
@Api(value = "configs")
@RestController
@RequestMapping("/v2")
public class ConfigController {

    @RequestMapping(value = "/configs", method = RequestMethod.GET)
    @ApiOperation(value="Get configs", httpMethod="GET", notes="")
    public ResponseEntity<ResultVO> getConfigs() {
        ConfigVO configVO = new ConfigVO();
        configVO.setTest(true);
        ResultVO resultVO = new ResultVO(0, "", configVO);
        return new ResponseEntity<>(resultVO, HttpStatus.OK);
    }
}
