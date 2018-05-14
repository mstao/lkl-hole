package com.lkl.hole.service.dao;

import com.lkl.hole.facade.model.Location;

/**
 * @Author: mingshan
 * @Date: Created in 20:26 2018/5/13
 */
public interface LocationDao {

    /**
     * 插入Location
     * @param location
     * @return
     */
    Long insert(Location location);
}
