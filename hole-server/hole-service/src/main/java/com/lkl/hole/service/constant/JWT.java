package com.lkl.hole.service.constant;

/**
 * @Author: mingshan
 * @Date: Created in 10:55 2018/5/13
 */
public class JWT {
    // --------- JWT ---------------
    /**
     * token有效期（小时）
     */
    public static final int TOKEN_EXPIRES_HOUR = 72;


    /**
     * JWT ID
     */
    public static final  String JWT_ID = "jwt";

    /**
     * JWT - 加密密匙
     */
    public static final String JWT_SECRET = "lkl";

    /**
     * token 保存时间
     */
    public static final int JWT_TTL = 3 * 24 * 60 * 60 * 1000;  //millisecond => 72 h

    /**
     * 刷新间隔
     */
    public static final int JWT_REFRESH_INTERVAL = 55 * 60 * 1000;  //millisecond

    /**
     * 刷新时间
     */
    public static final int JWT_REFRESH_TTL = 12 * 60 * 60 * 1000;  //millisecond => 12 h
}
