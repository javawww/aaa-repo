/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : aaa

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-05-22 12:35:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_bonus_inf
-- ----------------------------
DROP TABLE IF EXISTS `t_bonus_inf`;
CREATE TABLE `t_bonus_inf` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `bonusDesc` varchar(255) DEFAULT NULL COMMENT '奖金描述  示例  来源A00005种植的第5棵金树',
  `bonusStatus` tinyint(4) DEFAULT NULL COMMENT '奖金状态 0未结算 1已结算',
  `bonusType` tinyint(4) DEFAULT NULL COMMENT '奖金类型  0动态钱包 2收益钱包（静态解冻）',
  `bonusSalar` decimal(30,9) DEFAULT NULL COMMENT '奖金金额  示例 500.64',
  `bonusTime` datetime DEFAULT NULL COMMENT '生成时间',
  `sendMemId` int(11) DEFAULT NULL COMMENT '外键 关联种树人，儿子',
  `sendMemNum` varchar(255) DEFAULT NULL COMMENT '关联种树人，儿子',
  `receMemId` int(11) DEFAULT NULL COMMENT '外键 关联拿代数奖提成的father',
  `receMemNum` varchar(255) DEFAULT NULL COMMENT '关联拿代数奖提成的father',
  `fhMemId` int(11) DEFAULT NULL COMMENT '外键 关联日分红的收益人，也是唯一的相关人',
  `fhMemNum` varchar(255) DEFAULT NULL COMMENT '关联日分红的收益人，也是唯一的相关人',
  `bonusRepoId` int(11) DEFAULT NULL COMMENT '外键  关联奖金报表 多对一 暂时遗弃的属性',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1461 DEFAULT CHARSET=utf8 COMMENT='奖金明细表 奖金类型 代数奖 日分红';

-- ----------------------------
-- Records of t_bonus_inf
-- ----------------------------

-- ----------------------------
-- Table structure for t_bonus_report
-- ----------------------------
DROP TABLE IF EXISTS `t_bonus_report`;
CREATE TABLE `t_bonus_report` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `dynaBonus` decimal(15,6) DEFAULT NULL COMMENT '代数奖 即 动态奖',
  `shareBonus` decimal(15,6) DEFAULT NULL COMMENT '日分红 即 静态奖',
  `totalBonus` decimal(15,6) DEFAULT NULL COMMENT '总金额  即 动态奖 + 静态奖',
  `createTime` datetime DEFAULT NULL COMMENT '结算时间 即 生成时间',
  `grantStatus` tinyint(4) DEFAULT NULL COMMENT '发放状态 0未发放 1已发放',
  `memNum` varchar(255) DEFAULT NULL COMMENT '关联所属用户编号 示例 A00005',
  `createDate` date DEFAULT NULL COMMENT '结算日期 即 生成日期 示例 2017-06-25',
  `optType` tinyint(4) DEFAULT NULL COMMENT '操作类型  收支明细1 财务明细2',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8 COMMENT='奖金统计  全网会员 动态奖 日分红\r\n动态奖 秒结日发 | 日分红 秒结秒发';

-- ----------------------------
-- Records of t_bonus_report
-- ----------------------------

-- ----------------------------
-- Table structure for t_currency_info
-- ----------------------------
DROP TABLE IF EXISTS `t_currency_info`;
CREATE TABLE `t_currency_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `activPenn` decimal(30,9) DEFAULT NULL COMMENT '激活积分',
  `dynWallet` decimal(30,9) DEFAULT NULL COMMENT '动态钱包',
  `statDJWallet` decimal(30,9) DEFAULT NULL COMMENT '静态冻结钱包',
  `statJDWallet` decimal(30,9) DEFAULT NULL COMMENT '静态解冻钱包',
  `seedsPenn` decimal(30,9) DEFAULT NULL COMMENT '种子积分',
  `manaMoney` decimal(30,9) DEFAULT NULL COMMENT '管家月俸',
  `kidMoney` decimal(30,9) DEFAULT NULL COMMENT '神童日俸',
  `memNum` varchar(255) DEFAULT NULL COMMENT '关联用户编码',
  `memid` int(11) DEFAULT NULL COMMENT '关联用户主键ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8 COMMENT='所有币种信息  关联用户   一对一';

-- ----------------------------
-- Records of t_currency_info
-- ----------------------------
INSERT INTO `t_currency_info` VALUES ('1', '0.000000000', '0.000000000', '0.000000000', '0.000000000', '0.000000000', '0.000000000', '0.000000000', 'admin', '1');

-- ----------------------------
-- Table structure for t_czqx_log
-- ----------------------------
DROP TABLE IF EXISTS `t_czqx_log`;
CREATE TABLE `t_czqx_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `czqxType` tinyint(4) DEFAULT NULL COMMENT '充值类型 0激活积分 1种子积分 取现类型 提现币种 2动态钱包 3静态解冻钱包',
  `czqxMark` varchar(255) DEFAULT NULL COMMENT '备注 充值备注 取现备注 玩家附加充值、取现相关信息',
  `czqxWay` tinyint(4) DEFAULT NULL COMMENT '充值方式  0线下打款 目前仅此一种  取现方式没有',
  `czqxSalar` decimal(10,0) DEFAULT NULL COMMENT '充值 取现 金额  1:1比例充值',
  `czqxTime` datetime DEFAULT NULL COMMENT '充值时间  取现时间  即创建时间',
  `czqxtatus` tinyint(4) DEFAULT NULL COMMENT '充值状态  取现状态 0 审核中 1交易完成 2交易失败',
  `qxPoundSalar` decimal(10,0) DEFAULT NULL COMMENT '/提现手续费 即平台手续费 计算得出',
  `qxRealSalar` decimal(10,0) DEFAULT NULL COMMENT '提现实际到账金额  = 提现金额-提现手续费',
  `memId` int(11) DEFAULT NULL COMMENT '外键 关联充值提现的当事人',
  `memNo` varchar(255) DEFAULT NULL COMMENT '关联 当前操作用户',
  `optType` tinyint(4) DEFAULT NULL COMMENT '操作类型 1充值操作 2取现操作',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=141 DEFAULT CHARSET=utf8 COMMENT='充值取现记录信息   玩家充值记录  玩家取现记录';

-- ----------------------------
-- Records of t_czqx_log
-- ----------------------------

-- ----------------------------
-- Table structure for t_db_backup
-- ----------------------------
DROP TABLE IF EXISTS `t_db_backup`;
CREATE TABLE `t_db_backup` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '备份名字',
  `message` varchar(255) DEFAULT NULL COMMENT '备注信息',
  `date` datetime DEFAULT NULL COMMENT '备份日期',
  `location` varchar(255) DEFAULT NULL COMMENT '备份所在的位置',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_db_backup
-- ----------------------------

-- ----------------------------
-- Table structure for t_emsg
-- ----------------------------
DROP TABLE IF EXISTS `t_emsg`;
CREATE TABLE `t_emsg` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `msgSubject` varchar(255) DEFAULT NULL COMMENT '邮件主题 邮件标题',
  `msgContent` varchar(5000) DEFAULT NULL COMMENT '邮件正文 邮件内容 html编辑器',
  `sendid` int(11) DEFAULT NULL COMMENT '外键 关联发件人 当前登录用户',
  `receids` varchar(255) DEFAULT NULL COMMENT '外键 关联收件人 一或多个 示例1,2,3 发送至 张三,李四,王五',
  `sendTime` datetime DEFAULT NULL COMMENT '发送时间',
  `msgStatus` int(11) DEFAULT NULL COMMENT '查看状态 0未读邮件 1已读邮件',
  `msgType` tinyint(4) DEFAULT NULL COMMENT '邮件类型 0注册问题 1安全问题 2账号问题3交易问题 4其他问题',
  `memNum` varchar(255) DEFAULT NULL COMMENT '编辑该邮件的会员编号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=251 DEFAULT CHARSET=utf8 COMMENT='邮件管理 前台用户和后台管理员可以通过邮件中心进行信息通讯';

-- ----------------------------
-- Records of t_emsg
-- ----------------------------

-- ----------------------------
-- Table structure for t_ep_order
-- ----------------------------
DROP TABLE IF EXISTS `t_ep_order`;
CREATE TABLE `t_ep_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `eporderSalar` decimal(15,6) DEFAULT NULL COMMENT '交易金额 ',
  `memNumBuy` varchar(255) DEFAULT NULL COMMENT '关联用户编号 即 购买人编号',
  `eporderTime` datetime DEFAULT NULL COMMENT '交易时间 ',
  `eporderStatus` tinyint(4) DEFAULT NULL COMMENT '交易状态 0交易中 1交易完成   2撤销交易',
  `memNumSeller` varchar(255) DEFAULT NULL COMMENT '关联用户编号 即 挂卖人编号',
  `epsellId` int(11) DEFAULT NULL COMMENT '外键 关联挂卖信息 多对一 关系',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_ep_order
-- ----------------------------

-- ----------------------------
-- Table structure for t_ep_sell
-- ----------------------------
DROP TABLE IF EXISTS `t_ep_sell`;
CREATE TABLE `t_ep_sell` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `epsellSalar` decimal(15,6) DEFAULT NULL COMMENT ' 挂卖金额',
  `memNum` varchar(255) DEFAULT NULL COMMENT '关联所属用户编号 即 挂卖人',
  `esellTime` datetime DEFAULT NULL COMMENT '挂卖时间  即 创建时间 ',
  `esellStatus` tinyint(4) DEFAULT NULL COMMENT '挂卖状态 0挂卖中 1交易完成   2撤销交易',
  `memId` int(11) DEFAULT NULL COMMENT '关联所属用户ID 即 挂卖人',
  `prioLevel` int(11) DEFAULT NULL COMMENT '优先级 默认为null 在后台可以设置 优先级比较 越大的优先级越高 例子 4 > 3',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8 COMMENT='* EP挂卖操作  只针对种子积分\r\n * 前台种子积分进行 挂卖订单  每个玩家同时只能挂卖一条EP订单';

-- ----------------------------
-- Records of t_ep_sell
-- ----------------------------

-- ----------------------------
-- Table structure for t_exchange_log
-- ----------------------------
DROP TABLE IF EXISTS `t_exchange_log`;
CREATE TABLE `t_exchange_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `sendMemNum` varchar(255) DEFAULT NULL COMMENT '会员编号 玩家互转所需',
  `sendMemId` int(11) DEFAULT NULL,
  `receMemNum` varchar(255) DEFAULT NULL,
  `hzhType` tinyint(4) DEFAULT NULL COMMENT '互转币种类型 5种子积分 6激活积分',
  `zhhMemId` int(11) DEFAULT NULL COMMENT '转换币种操作人的id',
  `zhhFromType` tinyint(4) DEFAULT NULL COMMENT '转换币种类型  即源类型 5种子积分 0动态钱包 2静态解冻钱包',
  `zhhToType` tinyint(4) DEFAULT NULL COMMENT '兑换币种类型 即目标类型 5种子积分 3神童日俸 4管家月俸 6激活积分',
  `money` decimal(15,6) DEFAULT NULL COMMENT '转换数量',
  `createTime` datetime DEFAULT NULL COMMENT '转换时间 即创建时间',
  `optType` tinyint(4) DEFAULT NULL COMMENT '操作类型，0会员互转    1玩家转换',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_exchange_log
-- ----------------------------

-- ----------------------------
-- Table structure for t_gain_log
-- ----------------------------
DROP TABLE IF EXISTS `t_gain_log`;
CREATE TABLE `t_gain_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `treeNo` tinyint(4) DEFAULT NULL COMMENT '来源树编号 1-10 为银树  11-15为金树',
  `memNum` varchar(255) DEFAULT NULL COMMENT '玩家编号',
  `memId` int(11) DEFAULT NULL COMMENT '外键 关联玩家ID ',
  `gainSalar` decimal(15,6) DEFAULT NULL COMMENT '收益金额  不同收益类型 收益金额计算方式不同',
  `gainTime` datetime DEFAULT NULL COMMENT '收益时间 即 创建时间',
  `treeType` tinyint(4) DEFAULT NULL COMMENT '0银树  1金树',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=292 DEFAULT CHARSET=utf8 COMMENT='收益记录信息  数据类型：动态钱包 静态冻结钱包 静态解冻钱包';

-- ----------------------------
-- Records of t_gain_log
-- ----------------------------

-- ----------------------------
-- Table structure for t_gjst_status
-- ----------------------------
DROP TABLE IF EXISTS `t_gjst_status`;
CREATE TABLE `t_gjst_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `gjSalar` decimal(30,9) DEFAULT NULL COMMENT '管家金额  购买管家耗费的管家月俸 默认为0 无管家',
  `stSalar` decimal(30,9) DEFAULT NULL COMMENT '神童金额 购买神童耗费的神童日俸 默认为0 神童不工作',
  `gjBeginTime` datetime DEFAULT NULL COMMENT '/管家充值时间  ',
  `gjOverTime` datetime DEFAULT NULL COMMENT '管家结束时间',
  `stBeginTime` datetime DEFAULT NULL COMMENT '神童充值时间',
  `stOverTime` datetime DEFAULT NULL COMMENT '神童结束时间',
  `gjStatus` tinyint(4) DEFAULT NULL COMMENT '管家状态 默认0 无法工作 1正常工作',
  `stStatus` tinyint(4) DEFAULT NULL COMMENT '神童状态 默认0 无法工作 1正常工作',
  `stealCount` int(11) DEFAULT NULL COMMENT '偷取次数 默认无管家对应全局参数数值 wgjCount  当管家充值成功 更新此数据  对应全局参数数值ptgjCount',
  `memNo` varchar(255) DEFAULT NULL COMMENT '关联新会员对应的会员编号',
  `memId` int(11) DEFAULT NULL COMMENT '外键  关联新会员对应的ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8 COMMENT=' * 管家神童 状态信息  \r\n * 根据状态信息 进行玩家管家和神童的不同形象展示 进而具有不同的业务操作';

-- ----------------------------
-- Records of t_gjst_status
-- ----------------------------
INSERT INTO `t_gjst_status` VALUES ('1', '20.000000000', '10.000000000', '2017-06-26 16:42:41', '2017-07-26 16:42:41', '2017-06-29 17:26:30', '2017-06-30 17:26:30', '1', '0', '8', 'admin', '1');

-- ----------------------------
-- Table structure for t_information
-- ----------------------------
DROP TABLE IF EXISTS `t_information`;
CREATE TABLE `t_information` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `infNum` tinyint(11) DEFAULT NULL COMMENT '新闻编号',
  `infType` tinyint(11) DEFAULT NULL COMMENT '新闻类别  1普通公告 2活动公告 3其他公告',
  `infTitle` varchar(255) DEFAULT NULL COMMENT '新闻标题',
  `createTime` datetime DEFAULT NULL COMMENT '创建时间',
  `pubTime` datetime DEFAULT NULL COMMENT '发布时间  ',
  `infContent` varchar(5000) DEFAULT NULL COMMENT '新闻内容 html编辑器控制',
  `memid` int(11) DEFAULT NULL COMMENT '外键 关联当前管理员',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=386 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_information
-- ----------------------------

-- ----------------------------
-- Table structure for t_inout_report
-- ----------------------------
DROP TABLE IF EXISTS `t_inout_report`;
CREATE TABLE `t_inout_report` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `memNum` varchar(255) DEFAULT NULL COMMENT '关联所属用户编号 示例 A00005',
  `bonusType` tinyint(4) DEFAULT NULL COMMENT '//币种类型 0动态奖 1静态冻结奖2静态解冻将 3神童日俸 4管家月俸5种子积分6激活积分',
  `changeSalar` decimal(30,9) DEFAULT NULL COMMENT '变动余额   也是 收支类型   示例  -100表示支出  150表示收入。数据库存入-100/150等值',
  `origiSalar` decimal(30,9) DEFAULT NULL COMMENT '原始余额',
  `currSalar` decimal(30,9) DEFAULT NULL COMMENT '当前余额 即 新余额',
  `inoutDesc` varchar(255) DEFAULT NULL COMMENT '余额变动说明：会员A00005金树投资2000',
  `createTime` datetime DEFAULT NULL COMMENT '创建时间 即 变动时间',
  `bonusRepoId` int(11) DEFAULT NULL COMMENT '外键  关联奖金报表 多对一',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3630 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_inout_report
-- ----------------------------

-- ----------------------------
-- Table structure for t_invest_report
-- ----------------------------
DROP TABLE IF EXISTS `t_invest_report`;
CREATE TABLE `t_invest_report` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `plantTime` datetime DEFAULT NULL COMMENT '种植时间',
  `goldCount` int(11) DEFAULT NULL COMMENT '种植金树数量',
  `silvCount` int(11) DEFAULT NULL COMMENT '种植银树数量',
  `seedCount` decimal(15,6) DEFAULT NULL COMMENT '耗费种子积分数量',
  `treeNum` int(11) DEFAULT NULL COMMENT '种植编号 即 第几棵树',
  `memNum` varchar(255) DEFAULT NULL COMMENT '关联所属用户编号 示例 A00005',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=854 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_invest_report
-- ----------------------------

-- ----------------------------
-- Table structure for t_member
-- ----------------------------
DROP TABLE IF EXISTS `t_member`;
CREATE TABLE `t_member` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `memNum` varchar(255) DEFAULT NULL COMMENT '会员编号',
  `jhState` int(11) DEFAULT NULL COMMENT '激活状态  0未激活  1已激活',
  `gjLevel` int(11) DEFAULT NULL COMMENT '管家等级  0普通管家  1超级管家',
  `realName` varchar(255) DEFAULT NULL COMMENT '真实姓名',
  `teleNum` varchar(255) DEFAULT NULL COMMENT '手机号码',
  `tjrNum` varchar(255) DEFAULT NULL COMMENT '推荐人编号',
  `registTime` datetime DEFAULT NULL COMMENT '注册时间',
  `jhTime` datetime DEFAULT NULL COMMENT '激活时间',
  `djState` int(11) DEFAULT NULL COMMENT '冻结状态  0冻结  1解冻',
  `roleState` int(11) DEFAULT NULL COMMENT '角色类型  0普通会员  1超级管理员',
  `weichat` varchar(255) DEFAULT NULL COMMENT '微信账号',
  `alipay` varchar(255) DEFAULT NULL COMMENT '支付宝账号',
  `alipayName` varchar(255) DEFAULT NULL COMMENT '支付宝昵称',
  `loginPwd` varchar(255) DEFAULT NULL COMMENT '登录密码',
  `tradePwd` varchar(255) DEFAULT NULL COMMENT '交易密码',
  `bankNum` varchar(255) DEFAULT NULL COMMENT '银行卡号',
  `bankType` int(11) DEFAULT NULL COMMENT '银行卡类型  0中国工商银行、1中国建设银行、2中国银行、3中国农业银行、4交通银行',
  `khhAddress` varchar(255) DEFAULT NULL COMMENT '开户行地址',
  `khhkName` varchar(255) DEFAULT NULL COMMENT '开户行名称 ',
  `adloginPwd` varchar(255) DEFAULT NULL COMMENT '后台登录密码 即管理员',
  `ztAmounts` int(11) DEFAULT NULL COMMENT '直推数量  即直接推荐人的数量',
  `teamAmounts` int(11) DEFAULT NULL COMMENT '团队数量 即直接推荐和间接推荐和本身数量和',
  `protectQuest` tinyint(4) DEFAULT NULL COMMENT '密保问题  0最喜欢看的电影是什么? 1曾经去过最远的地方是? 2父亲的生日日期是多少号?',
  `protectAnswe` varchar(255) DEFAULT NULL COMMENT '密保答案',
  `payPic` varchar(255) DEFAULT NULL COMMENT '图片存放的位置和图片名，如：\\\\goldentree\\\\upload\\\\20170619\\\\51354351.jpg',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=138 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_member
-- ----------------------------
INSERT INTO `t_member` VALUES ('1', 'admin', '1', '1', '梦幻园', '18355555555', null, '2017-05-30 08:19:44', '2017-05-30 12:19:57', '1', '1', '15895413263', '15555555555', '梦幻园', '111111', '111111', '6217856101019613954', '2', '江苏苏州', '苏州横塘', '111111', '0', '0', '1', '111', 'upload/20170624/1498287109678.JPG');

-- ----------------------------
-- Table structure for t_mem_menu
-- ----------------------------
DROP TABLE IF EXISTS `t_mem_menu`;
CREATE TABLE `t_mem_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `memId` int(11) DEFAULT NULL COMMENT '关联会员ID',
  `menuId` int(11) DEFAULT NULL COMMENT '关联菜单ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=237 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_mem_menu
-- ----------------------------
INSERT INTO `t_mem_menu` VALUES ('114', '1', '1');
INSERT INTO `t_mem_menu` VALUES ('115', '1', '2');
INSERT INTO `t_mem_menu` VALUES ('116', '1', '3');
INSERT INTO `t_mem_menu` VALUES ('117', '1', '4');
INSERT INTO `t_mem_menu` VALUES ('118', '1', '5');
INSERT INTO `t_mem_menu` VALUES ('119', '1', '6');
INSERT INTO `t_mem_menu` VALUES ('120', '1', '7');
INSERT INTO `t_mem_menu` VALUES ('121', '1', '8');
INSERT INTO `t_mem_menu` VALUES ('122', '1', '9');
INSERT INTO `t_mem_menu` VALUES ('123', '1', '10');
INSERT INTO `t_mem_menu` VALUES ('124', '1', '11');
INSERT INTO `t_mem_menu` VALUES ('125', '1', '12');
INSERT INTO `t_mem_menu` VALUES ('126', '1', '13');
INSERT INTO `t_mem_menu` VALUES ('127', '1', '15');
INSERT INTO `t_mem_menu` VALUES ('128', '1', '16');
INSERT INTO `t_mem_menu` VALUES ('129', '1', '17');
INSERT INTO `t_mem_menu` VALUES ('130', '1', '18');
INSERT INTO `t_mem_menu` VALUES ('131', '1', '19');
INSERT INTO `t_mem_menu` VALUES ('132', '1', '20');
INSERT INTO `t_mem_menu` VALUES ('133', '1', '21');
INSERT INTO `t_mem_menu` VALUES ('134', '1', '22');
INSERT INTO `t_mem_menu` VALUES ('135', '1', '23');
INSERT INTO `t_mem_menu` VALUES ('136', '1', '24');
INSERT INTO `t_mem_menu` VALUES ('137', '1', '25');
INSERT INTO `t_mem_menu` VALUES ('138', '1', '26');
INSERT INTO `t_mem_menu` VALUES ('139', '1', '27');
INSERT INTO `t_mem_menu` VALUES ('140', '1', '28');
INSERT INTO `t_mem_menu` VALUES ('141', '1', '29');
INSERT INTO `t_mem_menu` VALUES ('142', '1', '30');
INSERT INTO `t_mem_menu` VALUES ('143', '1', '31');
INSERT INTO `t_mem_menu` VALUES ('144', '1', '32');

-- ----------------------------
-- Table structure for t_menu
-- ----------------------------
DROP TABLE IF EXISTS `t_menu`;
CREATE TABLE `t_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `isspread` int(11) DEFAULT NULL COMMENT '是否展开  0展开true  1折叠false',
  `menuTitle` varchar(255) DEFAULT NULL COMMENT '菜单标题',
  `menuIcon` varchar(255) DEFAULT NULL COMMENT '菜单图标',
  `menuHref` varchar(255) DEFAULT NULL COMMENT '菜单链接',
  `menuOrder` int(11) DEFAULT NULL COMMENT '菜单排序',
  `pid` int(11) DEFAULT NULL COMMENT '关联父亲Id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_menu
-- ----------------------------
INSERT INTO `t_menu` VALUES ('1', '1', '信息管理', 'fa-desktop', null, null, null);
INSERT INTO `t_menu` VALUES ('2', null, '添加公告', 'fa-laptop', 'admin/information/addNews', null, '1');
INSERT INTO `t_menu` VALUES ('3', null, '公告列表', 'fa-laptop', 'admin/information/newsNotice', null, '1');
INSERT INTO `t_menu` VALUES ('4', '0', '系统设置', 'fa-desktop', null, null, null);
INSERT INTO `t_menu` VALUES ('5', null, '初始参数', 'fa-laptop', 'admin/system/initParams', null, '4');
INSERT INTO `t_menu` VALUES ('6', '0', '会员管理', 'fa-desktop', null, null, null);
INSERT INTO `t_menu` VALUES ('7', null, '添加会员', 'fa-laptop', 'admin/member/add', null, '6');
INSERT INTO `t_menu` VALUES ('8', null, '会员列表', 'fa-laptop', 'admin/member/memberList', null, '6');
INSERT INTO `t_menu` VALUES ('9', null, '推荐图', 'fa-laptop', 'admin/member/recommFigure', null, '6');
INSERT INTO `t_menu` VALUES ('10', '0', '财务明细', 'fa-desktop', null, null, null);
INSERT INTO `t_menu` VALUES ('11', null, '奖金明细', 'fa-laptop', 'admin/finace/bonusDetail', null, '10');
INSERT INTO `t_menu` VALUES ('12', null, '收支明细', 'fa-laptop', 'admin/finace/investStatist', null, '10');
INSERT INTO `t_menu` VALUES ('13', null, '提现管理', 'fa-laptop', 'admin/finace/incarnateMan', null, '10');
INSERT INTO `t_menu` VALUES ('15', null, '充值管理', 'fa-laptop', 'admin/finace/rechargeMan', null, '10');
INSERT INTO `t_menu` VALUES ('16', null, '手动充值', 'fa-laptop', 'admin/finace/rechargeByHand', null, '10');
INSERT INTO `t_menu` VALUES ('17', null, '投资统计', 'fa-laptop', 'admin/finace/accountExpend', null, '10');
INSERT INTO `t_menu` VALUES ('18', '0', 'EP交易', 'fa-desktop', null, null, null);
INSERT INTO `t_menu` VALUES ('19', null, '挂卖列表', 'fa-laptop', 'admin/ep/epsellPage', null, '18');
INSERT INTO `t_menu` VALUES ('20', null, '交易订单', 'fa-laptop', 'admin/ep/eporder0Page', null, '18');
INSERT INTO `t_menu` VALUES ('21', null, '完成订单', 'fa-laptop', 'admin/ep/eporder1Page', null, '18');
INSERT INTO `t_menu` VALUES ('22', '0', '管理员', 'fa-desktop', null, null, null);
INSERT INTO `t_menu` VALUES ('23', null, '添加管理员', 'fa-laptop', 'admin/admin/addAdmin', null, '22');
INSERT INTO `t_menu` VALUES ('24', null, '管理员列表', 'fa-laptop', 'admin/admin/adminList', null, '22');
INSERT INTO `t_menu` VALUES ('25', '0', '邮件管理', 'fa-desktop', null, null, null);
INSERT INTO `t_menu` VALUES ('26', null, '发邮件', 'fa-laptop', 'admin/message/writeMsg', null, '25');
INSERT INTO `t_menu` VALUES ('27', null, '发件箱', 'fa-laptop', 'admin/message/outbox', null, '25');
INSERT INTO `t_menu` VALUES ('28', null, '收件箱', 'fa-laptop', 'admin/message/inbox', null, '25');
INSERT INTO `t_menu` VALUES ('29', '0', '数据库管理', 'fa-desktop', null, null, null);
INSERT INTO `t_menu` VALUES ('30', null, '备份与还原', 'fa-laptop', 'admin/dbman/dbBackup', null, '29');
INSERT INTO `t_menu` VALUES ('32', null, '数据初始化', 'fa-laptop', 'admin/dbman/dbEmpty', null, '29');

-- ----------------------------
-- Table structure for t_paramconf
-- ----------------------------
DROP TABLE IF EXISTS `t_paramconf`;
CREATE TABLE `t_paramconf` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `jhIntegral` decimal(15,6) DEFAULT NULL COMMENT '激活积分 激活普通会员使用 示例50元',
  `yszzIntegral` decimal(15,6) DEFAULT NULL COMMENT '银树种植一颗消耗的种子积分 示例200元 ',
  `jszzIntegral` decimal(15,6) DEFAULT NULL COMMENT '金树种植一颗消耗的种子积分 示例1000元',
  `ystqIntegral` decimal(15,6) DEFAULT NULL COMMENT '银树日分红每次偷取额度 示例 0.2元',
  `jstqIntegral` decimal(15,6) DEFAULT NULL COMMENT '金树日分红每次偷取额度 示例0.5元',
  `ystqCount` int(11) DEFAULT NULL COMMENT '银树日分红可被偷取次数 默认无管家 示例10次 该字段无效',
  `jstqCount` int(11) DEFAULT NULL COMMENT '金树日分红可被偷取次数 默认无管家 示例10次 该字段无效',
  `wgjCount` decimal(15,6) DEFAULT NULL COMMENT '金树 银树 无管家状态可被偷取次数 示例10次 ',
  `ptgjCount` decimal(15,6) DEFAULT NULL COMMENT '金树 银树 有管家状态可被偷取次数 示例8次',
  `cjgjCount` decimal(15,6) DEFAULT NULL COMMENT '超级管家偷取次数  该字段无效',
  `shtMoney` decimal(15,6) DEFAULT NULL COMMENT '神童日俸 针对神童是否处于工作状态的限定',
  `ptgjMoney` decimal(15,6) DEFAULT NULL COMMENT '管家月俸  针对管家是否处于工作状态的限定',
  `cjgjMoney` decimal(15,6) DEFAULT NULL COMMENT '超级管家月俸  该字段无效',
  `ysCapacity` decimal(15,6) DEFAULT NULL COMMENT '银树日分红收益产能 示例10元',
  `jsCapacity` decimal(15,6) DEFAULT NULL COMMENT '金树日分红收益产能 示例100元',
  `ysCapaCycle` int(11) DEFAULT NULL COMMENT '银树日分红产能周期 分钟 示例5分钟',
  `jsCapaCycle` int(11) DEFAULT NULL COMMENT '金树日分红产能周期 分钟 示例10分钟',
  `ysCapaLimit` int(11) DEFAULT NULL COMMENT '银树日分红产能上限  即分红次数 示例30次',
  `jsCapaLimit` int(11) DEFAULT NULL COMMENT '金树日分红产能上限  即分红次数 示例30次',
  `dsjScale` varchar(255) DEFAULT NULL COMMENT '代数奖比例 示例0.05,0.02,0.01,0.005,0.003,0.001 ',
  `zhtParam` varchar(255) DEFAULT NULL COMMENT '直推参数 示例1_1,3_2,6_3,15_4,20_10,50_15',
  `tixCycle` varchar(255) DEFAULT NULL COMMENT '提现周期 1_1,2_1,3_1,4_0,5_1,6_1,7_0 说明 1_1 礼拜一可以提现 4_0礼拜四不可提现...',
  `dyWalDeposit` varchar(255) DEFAULT NULL COMMENT '示例：1,100,2000,100,0.02 动态钱包每天提现次数,提现最低,提现最高,提现倍数,手续费',
  `jtWalDeposit` varchar(255) DEFAULT NULL COMMENT '示例：1,100,2000,100,0.02 静态钱包每天提现次数,提现最低,提现最高,提现倍数,手续费',
  `epSellTrade` varchar(255) DEFAULT NULL COMMENT '示例：100,2000,100 最低挂卖额度,最高挂卖额度,挂卖倍数',
  `epBuyTrade` varchar(255) DEFAULT NULL COMMENT '示例：100,2000,100 最低买进额度,最高买进额度,买进倍数',
  `dyWal2Jhjf` varchar(255) DEFAULT NULL COMMENT '动态钱包转激活积分 示例：100,2000,100 最低额度,最高额度,转换倍数',
  `dyWal2Zzjf` varchar(255) DEFAULT NULL COMMENT '动态钱包转种子积分示例：100,2000,100 最低额度,最高额度,转换倍数',
  `dyWal2GjMoney` varchar(255) DEFAULT NULL COMMENT '动态钱包转管家月俸示例：100,2000,100 最低额度,最高额度,转换倍数',
  `dyWal2ShtMoney` varchar(255) DEFAULT NULL COMMENT '动态钱包转神童日俸示例：100,2000,100 最低额度,最高额度,转换倍数',
  `jtWal2Jhjf` varchar(255) DEFAULT NULL COMMENT '静态钱包(收益钱包)转激活积分示例：100,2000,100 最低额度,最高额度,转换倍数',
  `jtWal2Zzjf` varchar(255) DEFAULT NULL COMMENT '静态钱包(收益钱包)转种子积分示例：100,2000,100 最低额度,最高额度,转换倍数',
  `jtWal2ShtMoney` varchar(255) DEFAULT NULL COMMENT '静态钱包(收益钱包)转神童日俸示例：100,2000,100 最低额度,最高额度,转换倍数',
  `jtWal2GjMoney` varchar(255) DEFAULT NULL COMMENT '静态钱包(收益钱包)转管家月俸示例：100,2000,100 最低额度,最高额度,转换倍数',
  `zzjf2Jhjf` varchar(255) DEFAULT NULL COMMENT '种子积分转激活积分示例：100,2000,100 最低额度,最高额度,转换倍数',
  `zzjf2ShtMoney` varchar(255) DEFAULT NULL COMMENT '种子积分转神童日俸示例：100,2000,100 最低额度,最高额度,转换倍数',
  `zzjf2GjMoney` varchar(255) DEFAULT NULL COMMENT '种子积分转管家月俸示例：100,2000,100 最低额度,最高额度,转换倍数',
  `zzjf2Zzjf` varchar(255) DEFAULT NULL COMMENT '会员间种子积分互转示例：100,2000,100 最低额度,最高额度,转换倍数',
  `jhjf2Jhjf` varchar(255) DEFAULT NULL COMMENT '会员间激活积分互转示例：100,2000,100 最低额度,最高额度,转换倍数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_paramconf
-- ----------------------------
INSERT INTO `t_paramconf` VALUES ('1', '50.000000', '200.000000', '2000.000000', '0.200000', '2.000000', '10', '10', '10.000000', '5.000000', '6.000000', '10.000000', '30.000000', '20.000000', '10.000000', '100.000000', '1440', '1440', '30', '30', '0.05,0.03,0.02,0.01,0.005,0.003', '1_1,3_2,6_3,10_4,20_10,30_15', '1_1,2_1,3_1,4_1,5_1,6_1,7_1', '1,200,2000,200,0.2', '1,100,6000,100,0.1', '10,1000,10', '10,1000,10', '50,1000,50', '100,6000,100', '10,100,10', '10,300,10', '50,1000,10', '100,6000,100', '10,300,10', '10,100,10', '50,200,10', '10,300,10', '10,100,10', '100,12000,100', '50,1000,50');

-- ----------------------------
-- Table structure for t_perfor_report
-- ----------------------------
DROP TABLE IF EXISTS `t_perfor_report`;
CREATE TABLE `t_perfor_report` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `memNum` varchar(255) DEFAULT NULL COMMENT '会员编号',
  `plantType` tinyint(4) DEFAULT NULL COMMENT '种植类型 0银树  1金树',
  `seedSalar` decimal(15,6) DEFAULT NULL COMMENT '投资金额 即 种子积分',
  `plantTime` datetime DEFAULT NULL COMMENT '种植时间  创建时间  ',
  `treeNum` int(11) DEFAULT NULL COMMENT '种树编号 ',
  `memId` int(11) DEFAULT NULL COMMENT '会员ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=571 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_perfor_report
-- ----------------------------

-- ----------------------------
-- Table structure for t_plant_stat
-- ----------------------------
DROP TABLE IF EXISTS `t_plant_stat`;
CREATE TABLE `t_plant_stat` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `treeNo` int(11) DEFAULT NULL COMMENT '树编号 银树1-10 金树11-15',
  `treeType` tinyint(4) DEFAULT NULL COMMENT '树类型  0银树 1金树',
  `plantTime` datetime DEFAULT NULL COMMENT '种植时间 即 创建时间',
  `gainTime` datetime DEFAULT NULL COMMENT '收获时间  即 出现小手的时间点',
  `overTime` datetime DEFAULT NULL COMMENT '产能耗尽时间点  需要重新种植',
  `isGain` tinyint(4) DEFAULT NULL COMMENT '是否产生收益 默认0没有收益 1产生收益 3产能耗尽 4没有收益(玩家点击获取)  数据动态更新',
  `shySalar` decimal(15,6) DEFAULT NULL COMMENT '收益金额   可被偷取 数据动态更新',
  `memid` int(11) DEFAULT NULL COMMENT '种植玩家 关联玩家id',
  `gainCounts` int(11) DEFAULT NULL COMMENT '//收益次数  默认为0 产生一次日分红+1 值为30时产能耗尽',
  `isOverTime` datetime DEFAULT NULL COMMENT '有效时间点  检测isGain数值 动态UPDATE',
  `capaCycle` int(11) DEFAULT NULL COMMENT '临时配置 日分红产能周期 分钟 示例5分钟',
  `capaLimit` int(11) DEFAULT NULL COMMENT '临时配置 日分红产能上限  即分红次数 示例30次',
  `tqIntegral` decimal(15,6) DEFAULT NULL COMMENT '临时配置 日分红每次偷取额度 示例 0.2元',
  `zzIntegral` decimal(15,6) DEFAULT NULL COMMENT '临时配置 种植一颗消耗的种子积分 示例1000元',
  `capacity` decimal(15,6) DEFAULT NULL COMMENT '临时配置 日分红收益产能 示例10元',
  `wgjCount` int(11) DEFAULT NULL COMMENT '临时配置 金树 银树 无管家状态可被偷取次数 示例10次',
  `ptgjCount` int(11) DEFAULT NULL COMMENT '临时配置金树 银树 有管家状态可被偷取次数 示例8次',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=366 DEFAULT CHARSET=utf8 COMMENT='TREE种植状态 信息记录';

-- ----------------------------
-- Records of t_plant_stat
-- ----------------------------

-- ----------------------------
-- Table structure for t_recharge
-- ----------------------------
DROP TABLE IF EXISTS `t_recharge`;
CREATE TABLE `t_recharge` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `memNum` varchar(255) DEFAULT NULL COMMENT '会员编号 ',
  `recharge` decimal(10,0) DEFAULT NULL COMMENT '充值金额  示例 500或 -200 对应增加 减少',
  `rechaType` tinyint(4) DEFAULT NULL COMMENT '充值币种 0动态钱包 1静态冻结钱包 2静态解冻钱包 3种子积分等等',
  `rechaMark` varchar(255) DEFAULT NULL COMMENT '充值备注',
  `memid` int(11) DEFAULT NULL COMMENT '外键  针对后台充值操作的管理员ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_recharge
-- ----------------------------

-- ----------------------------
-- Table structure for t_steal_log
-- ----------------------------
DROP TABLE IF EXISTS `t_steal_log`;
CREATE TABLE `t_steal_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `stealTime` datetime DEFAULT NULL COMMENT '偷取时间',
  `stealSalar` decimal(15,6) DEFAULT NULL COMMENT '偷取金额',
  `stealFrom` varchar(255) DEFAULT NULL COMMENT '偷取人  即偷取了哪位玩家 关联玩家编号',
  `stealBy` varchar(255) DEFAULT NULL COMMENT '被偷人  即小偷是谁 关联玩家编号',
  `treeNum` int(11) DEFAULT NULL COMMENT '偷取树的编号  ',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=421 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_steal_log
-- ----------------------------
