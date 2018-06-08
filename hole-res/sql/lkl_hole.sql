/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50716
Source Host           : localhost:3306
Source Database       : lkl_hole

Target Server Type    : MYSQL
Target Server Version : 50716
File Encoding         : 65001

Date: 2018-06-05 23:44:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for hole_blog
-- ----------------------------
DROP TABLE IF EXISTS `hole_blog`;
CREATE TABLE `hole_blog` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `uid` bigint(20) DEFAULT NULL,
  `text` text,
  `device` varchar(255) DEFAULT NULL,
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  `is_fixed` tinyint(4) DEFAULT '1',
  `like` tinyint(4) DEFAULT '0',
  `like_num` int(11) DEFAULT '0',
  `comment_num` int(11) DEFAULT '0',
  `is_deleted` tinyint(4) DEFAULT '0',
  `is_anonymous` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hole_blog
-- ----------------------------
INSERT INTO `hole_blog` VALUES ('1', '2', '【听荔电台点歌贴vol.03】点歌节目每周一晚更新♪(๑ᴖ◡ᴖ๑)♪\n点歌要求如下\n1.要点的歌的歌名和歌手的名字\n2.你要把这首歌送给谁\n3.你要对Ta说的话\n4.你要署名为什么\n我们将会做成广播节目，周一晚上在听荔公众号播出。\n\n请评论留言进行点歌，按照格式点歌，方便主播阅读和理解，感谢支持\n1.XXXX\n2.XXXX\n3.XXXX\n4.XXXX', 'iPhone7 Plus', '2018-05-14 22:13:37', '2018-05-14 22:13:37', '1', '0', '2', '2', '1', '1');
INSERT INTO `hole_blog` VALUES ('2', '2', '【听荔电台点歌贴vol.03】点歌节目每周一晚更新♪(๑ᴖ◡ᴖ๑)♪\n点歌要求如下\n1.要点的歌的歌名和歌手的名字\n2.你要把这首歌送给谁\n3.你要对Ta说的话\n4.你要署名为什么\n我们将会做成广播节目，周一晚上在听荔公众号播出。\n\n请评论留言进行点歌，按照格式点歌，方便主播阅读和理解，感谢支持\n1.XXXX\n2.XXXX\n3.XXXX\n4.XXXX', 'MI 6', '2018-05-14 22:47:11', '2018-05-14 22:47:11', '1', '0', '3', '1', '0', '1');
INSERT INTO `hole_blog` VALUES ('3', '2', '【美国服装巨头Gap为“删减”中国地图道歉】', 'MI 6', '2018-05-14 23:01:54', '2018-05-14 23:01:54', '1', '0', '0', '0', '0', '1');
INSERT INTO `hole_blog` VALUES ('4', '2', '周杰伦的土味歌词可以说非常逗了，“哥练的胸肌” 女生怎么能唱出口啊[允悲]\r\n哈哈哈哈哈哈大早上被方文山微博评论逗笑了 ​[笑cry] ​​​​ ', 'MI 6', '2018-05-14 23:04:13', '2018-05-14 23:04:13', '1', '0', '0', '0', '0', '1');
INSERT INTO `hole_blog` VALUES ('5', '2', '【扎克伯格今天34岁：出生以来平均每天赚600万美元[衰][衰]】', 'MI 6', '2018-05-15 00:29:27', '2018-05-15 00:29:27', '1', '0', '0', '1', '0', '0');

-- ----------------------------
-- Table structure for hole_comment
-- ----------------------------
DROP TABLE IF EXISTS `hole_comment`;
CREATE TABLE `hole_comment` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `uid` bigint(20) DEFAULT NULL,
  `bid` bigint(20) DEFAULT NULL,
  `content` text,
  `is_anonymous` tinyint(4) DEFAULT NULL,
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  `is_deleted` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hole_comment
-- ----------------------------
INSERT INTO `hole_comment` VALUES ('1', '2', '2', 'wccc', '1', '2018-05-15 00:29:51', '2018-05-15 00:29:51', '1');
INSERT INTO `hole_comment` VALUES ('2', '2', '2', 'wccc', '1', '2018-05-15 00:29:51', '2018-05-15 00:29:51', '0');
INSERT INTO `hole_comment` VALUES ('3', '2', '2', 'wccccc', '1', '2018-05-15 00:38:27', '2018-05-15 00:38:27', '0');
INSERT INTO `hole_comment` VALUES ('4', '2', '2', 'wccccc', '1', '2018-05-15 00:38:27', '2018-05-15 00:38:27', '0');
INSERT INTO `hole_comment` VALUES ('5', '2', '3', 'qqqweqqeq', '1', '2018-05-15 00:46:27', '2018-05-15 00:46:27', '0');
INSERT INTO `hole_comment` VALUES ('6', '2', '3', '踩踩踩踩踩踩踩踩踩踩踩踩從', '1', '2018-05-15 08:45:20', '2018-05-15 08:45:20', '0');
INSERT INTO `hole_comment` VALUES ('7', '2', '3', 'xxxxx', '1', '2018-05-15 08:50:22', '2018-05-15 08:50:22', '0');
INSERT INTO `hole_comment` VALUES ('8', '2', '4', 'good', '1', '2018-05-15 09:12:55', '2018-05-15 09:12:55', '0');
INSERT INTO `hole_comment` VALUES ('9', '2', '2', '可以', '0', '2018-05-25 18:14:04', '2018-05-25 18:14:04', '0');
INSERT INTO `hole_comment` VALUES ('10', '2', '5', '55rtrryrt', '1', '2018-05-27 12:10:45', '2018-05-27 12:10:45', '0');

-- ----------------------------
-- Table structure for hole_image
-- ----------------------------
DROP TABLE IF EXISTS `hole_image`;
CREATE TABLE `hole_image` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `bid` bigint(20) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hole_image
-- ----------------------------
INSERT INTO `hole_image` VALUES ('1', '3', '/resources/uploads/images/ee4efa35-1f67-44e0-b601-56d0f5a45b49.jpg', '2018-05-14 23:01:54', '2018-05-14 23:01:54');
INSERT INTO `hole_image` VALUES ('2', '4', '/resources/uploads/images/ee4efa35-1f67-44e0-b601-56d0f5a45b49.jpg', '2018-05-14 23:04:13', '2018-05-14 23:04:13');
INSERT INTO `hole_image` VALUES ('3', '5', '/resources/uploads/images/ee4efa35-1f67-44e0-b601-56d0f5a45b49.jpg', '2018-05-15 00:29:27', '2018-05-15 00:29:27');

-- ----------------------------
-- Table structure for hole_location
-- ----------------------------
DROP TABLE IF EXISTS `hole_location`;
CREATE TABLE `hole_location` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `bid` bigint(20) DEFAULT NULL,
  `location_name` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hole_location
-- ----------------------------
INSERT INTO `hole_location` VALUES ('1', '1', '22', '11', '33');
INSERT INTO `hole_location` VALUES ('2', '2', '2222', '1111', '3333');
INSERT INTO `hole_location` VALUES ('3', '3', '2222', '1111', '3333');
INSERT INTO `hole_location` VALUES ('4', '4', '2222', '1111', '3333');
INSERT INTO `hole_location` VALUES ('5', '5', '2222', '1111', '3333');

-- ----------------------------
-- Table structure for hole_notification
-- ----------------------------
DROP TABLE IF EXISTS `hole_notification`;
CREATE TABLE `hole_notification` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cid` bigint(20) DEFAULT NULL,
  `bid` bigint(20) DEFAULT NULL,
  `from` varchar(255) DEFAULT NULL,
  `to` varchar(255) DEFAULT NULL,
  `content` text,
  `is_unread` tinyint(4) DEFAULT '1',
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hole_notification
-- ----------------------------
INSERT INTO `hole_notification` VALUES ('1', '3', '3', 'os9sm0fRS_8nsIM4kY6fe5Vng2wI', 'os9sm0fRS_8nsIM4kY6fe5Vng2wI', 'zzzzzzzzzzz', '1', '2018-05-15 09:07:00', '2018-05-15 09:07:00');
INSERT INTO `hole_notification` VALUES ('2', '8', '4', 'os9sm0fRS_8nsIM4kY6fe5Vng2wI', 'os9sm0fRS_8nsIM4kY6fe5Vng2wI', 'good', '1', '2018-05-15 09:12:55', '2018-05-15 09:12:55');

-- ----------------------------
-- Table structure for hole_user
-- ----------------------------
DROP TABLE IF EXISTS `hole_user`;
CREATE TABLE `hole_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `openid` varchar(255) DEFAULT NULL,
  `unionid` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `gender` tinyint(4) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `is_admin` tinyint(4) DEFAULT '1',
  `is_author` tinyint(4) DEFAULT '0',
  `is_verified` tinyint(4) DEFAULT '1',
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hole_user
-- ----------------------------
INSERT INTO `hole_user` VALUES ('2', 'os9sm0fRS_8nsIM4kY6fe5Vng2wI', null, '明山', '1', 'https://wx.qlogo.cn/mmopen/vi_32/1EFFxMuATAyEBpiacdsBUOGphzVweiagSAqaiaKleepPwc6gvBClGhHk7roMl3sbjtHHMA85PgE8xqtDJE8R8zAlg/132', '0', '0', '1', '2018-05-13 10:12:55', '2018-05-13 10:12:55');
