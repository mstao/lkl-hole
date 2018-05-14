package com.lkl.hole.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.lkl.hole.facade.model.Blog;
import com.lkl.hole.facade.model.Image;
import com.lkl.hole.facade.model.Location;
import com.lkl.hole.facade.service.BlogService;
import com.lkl.hole.service.dao.BlogDao;
import com.lkl.hole.service.dao.ImageDao;
import com.lkl.hole.service.dao.LocationDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author: mingshan
 * @Date: Created in 16:56 2018/5/13
 */
@Service
public class BlogServiceImpl implements BlogService {

    @Autowired
    private BlogDao blogDao;

    @Autowired
    private LocationDao locationDao;

    @Autowired
    private ImageDao imageDao;

    @Override
    public PageInfo<Blog> findAll(int pageNumber, int pageSize) {
        PageHelper.startPage(pageNumber, pageSize);
        List<Blog>  blogs = blogDao.selectByPage();
        PageInfo<Blog> page = new PageInfo<>(blogs);
        return page;
    }

    @Override
    public Blog getById(Long bid) {
        return blogDao.selectByPrimaryKey(bid);
    }

    @Override
    public void increaseLikeNum(Long id) {
        blogDao.increaseLikeNum(id);
    }

    @Override
    public void delete(Long id) {
        blogDao.delete(id);
    }

    @Override
    public Long add(Blog blog) {
        blogDao.insert(blog);
        Long bid = blog.getId();
        Location location = blog.getLocation();
        location.setBid(bid);
        locationDao.insert(location);
        List<Image> images = blog.getImages();
        for (Image image : images) {
            image.setBid(bid);
        }
        imageDao.insertBatch(images);
        return bid;
    }
}