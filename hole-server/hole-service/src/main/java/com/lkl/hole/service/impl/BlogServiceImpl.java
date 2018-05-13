package com.lkl.hole.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.lkl.hole.facade.model.Blog;
import com.lkl.hole.facade.service.BlogService;

import java.util.List;

/**
 * @Author: mingshan
 * @Date: Created in 16:56 2018/5/13
 */
public class BlogServiceImpl implements BlogService {

    @Override
    public PageInfo<Blog> findAll(int pageNumber, int pageSize) {

        return null;
    }

    @Override
    public Blog getById(Long bid) {
        return null;
    }

    @Override
    public void increaseLikeNum(Long bid) {

    }

    @Override
    public void delete(Long bid) {

    }

    @Override
    public Long add(Blog blog) {
        return null;
    }
}
