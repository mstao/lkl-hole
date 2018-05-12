package com.lkl.hole.common.util;

/**
 * @Author: mingshan
 * @Date: Created in 16:47 2018/5/11
 */
public class StringUtil {
    public static byte[] strToByteArray(String str) {
        if (str == null) {
            return null;
        }
        byte[] byteArray = str.getBytes();
        return byteArray;
    }
}
