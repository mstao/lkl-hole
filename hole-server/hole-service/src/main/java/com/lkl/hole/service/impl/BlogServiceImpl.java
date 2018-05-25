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
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


/**
 * @Author: mingshan
 * @Date: Created in 16:56 2018/5/13
 */
@Service
public class BlogServiceImpl implements BlogService {
    private static final Logger logger = LoggerFactory.getLogger(BlogServiceImpl.class);

    @Autowired
    private BlogDao blogDao;

    @Autowired
    private LocationDao locationDao;

    @Autowired
    private ImageDao imageDao;

    @Override
    public PageInfo<Blog> findAll(Integer pageNum, Integer pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        List<Blog> blogs = blogDao.selectByPage();
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
        logger.info("Add blog; bid = " + bid);
        Location location = blog.getLocation();
        if (location != null) {
            location.setBid(bid);
            locationDao.insert(location);
        }
        List<Image> images = blog.getImages();
        if (images != null) {
            for (Image image : images) {
                image.setBid(bid);
            }
            imageDao.insertBatch(images);
        }

        return bid;
    }

    @Override
    public PageInfo<Blog> findByUser(String openId, Integer pageNum, Integer pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        List<Blog> blogs = blogDao.selectByUser(openId);
        PageInfo<Blog> page = new PageInfo<>(blogs);
        return page;
    }
}
