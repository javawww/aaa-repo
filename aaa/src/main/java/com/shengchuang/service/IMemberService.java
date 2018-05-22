package com.shengchuang.service;

import com.shengchuang.entity.User;

public interface IMemberService {
	
	User get(java.lang.Integer id);
	
	Integer save(User user);
	
	Integer update(User user);
}
