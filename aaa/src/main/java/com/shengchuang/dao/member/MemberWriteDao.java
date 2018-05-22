package com.shengchuang.dao.member;

import org.springframework.stereotype.Repository;

import com.shengchuang.entity.User;

/**
 * 会员表
 * @author Administrator
 *
 */
@Repository
public interface MemberWriteDao {

	
	User get(java.lang.Integer id);
	
	Integer save(User user);
	
	Integer update(User user);
	
}
