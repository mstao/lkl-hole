package com.lkl.hole.common.service;

/**
 * @Author: mingshan
 * @Date: Created in 10:47 2018/4/24
 */
public interface BaseService<T> {
    T findById(long id);

    long insert(T model);

    long update(T model);

    long delete(long id);
}
