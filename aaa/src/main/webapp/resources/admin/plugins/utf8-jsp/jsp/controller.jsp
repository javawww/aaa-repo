<%@ page language="java" contentType="text/html; charset=UTF-8"
	import="com.baidu.ueditor.ActionEnter"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%

    request.setCharacterEncoding( "utf-8" );
	response.setHeader("Content-Type" , "text/html");
	
	String rootPath = application.getRealPath( "/" );
	//自定义保存的根目录,从而达到上传目录不在是项目下,默认为项目根目录
	String saveRootPath = "/root/t8082/webapps/ROOT/goldentree";
	out.write( new ActionEnter( request,saveRootPath, rootPath ).exec() );
	
%>