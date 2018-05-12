package com.lkl.hole.common.util;

import redis.clients.jedis.Jedis;

/**
 * @Author: mingshan
 * @Date: Created in 15:14 2018/5/11
 */
public class RedisHelper {

    public static String get(final String key) {
        try {
            Jedis jedis = RedisUtil.getJedis();
            try {
                byte[] bytes = jedis.get(key.getBytes());
                if (bytes != null) {
                    String result = ProtostuffUtil.deserializer(bytes, String.class);
                    return result;
                }
            } finally {
                RedisUtil.returnResource(jedis);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static String put(final String key, long expires, final String value) {
        try {
            Jedis jedis = RedisUtil.getJedis();
            try {
                byte[] bytes = ProtostuffUtil.serializer(value);
                String result = jedis.setex(key.getBytes(), (int) expires, bytes);
                return result;
            } finally {
                RedisUtil.returnResource(jedis);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
