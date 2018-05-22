package com.shengchuang.web.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.shengchuang.core.ResultCode;
import com.shengchuang.web.util.PropertiesUtil;

import sun.misc.BASE64Decoder; 

@Controller
public class UploadPicController {
 
	 
	@RequestMapping(value="admin/upload",method=RequestMethod.POST)
	public void upload1(MultipartHttpServletRequest request,HttpServletResponse response,@RequestParam MultipartFile file) throws Exception {
        Map<String, Object> jsonMap = new HashMap<String, Object>(); 
         
        String fileName=file.getOriginalFilename();
        
        String ext = fileName.substring(fileName.lastIndexOf(".")+1,fileName.length());  
        
        SimpleDateFormat sdf=new SimpleDateFormat("yyyyMMdd");
        
        /*String path = "D:\\zhongshang\\wl\\src\\main\\webapp\\upload";*/
//        String path = request.getSession().getServletContext().getRealPath("upload/");
        PropertiesUtil util = new PropertiesUtil("sysConfig.properties");
		String picServerPath = util.readProperty("picServerPath");
		String picServerip = util.readProperty("picServerip");
        /*String uploadPath= "D:\\zhongshang\\wl\\src\\main\\webapp\\upload";*/
//        String uploadPath=request.getSession().getServletContext().getRealPath("upload/"+sdf.format(new Date())+"/");
        String uploadPath=picServerPath+sdf.format(new Date())+"/";
       
        String newfileName = new Date().getTime()+"."+ext;  
        
        File uploadDir=new File(uploadPath,newfileName);
        if(!uploadDir.exists()){
            uploadDir.mkdirs();
        }
        File uploadFile=new File(uploadPath+"/"+newfileName);
        file.transferTo(uploadFile); 
        
        response.setContentType("text/html;charset=UTF-8");  
		response.getWriter().write(picServerip+sdf.format(new Date())+"/"+newfileName);
    }
	
	@RequestMapping(value="front/upload",method=RequestMethod.POST)
	public void frontupload1(MultipartHttpServletRequest request,HttpServletResponse response,@RequestParam MultipartFile file) throws Exception {
		Map<String, Object> jsonMap = new HashMap<String, Object>(); 
		
		String fileName=file.getOriginalFilename();
		
		String ext = fileName.substring(fileName.lastIndexOf(".")+1,fileName.length());  
		
		SimpleDateFormat sdf=new SimpleDateFormat("yyyyMMdd");
		
		/*String path = "D:\\zhongshang\\wl\\src\\main\\webapp\\upload";*/
//		String path = request.getSession().getServletContext().getRealPath("upload/");
		PropertiesUtil util = new PropertiesUtil("sysConfig.properties");
		String picServerPath = util.readProperty("picServerPath");
		String picServerip = util.readProperty("picServerip");
		/*String uploadPath= "D:\\zhongshang\\wl\\src\\main\\webapp\\upload";*/
		String uploadPath=picServerPath+sdf.format(new Date())+"/";
		
		String newfileName = new Date().getTime()+"."+ext;  
		
		File uploadDir=new File(uploadPath,newfileName);
		if(!uploadDir.exists()){
			uploadDir.mkdirs();
		}
		File uploadFile=new File(uploadPath+"/"+newfileName);
		file.transferTo(uploadFile); 
		
		response.setContentType("text/html;charset=UTF-8");  
		response.getWriter().write(picServerip+sdf.format(new Date())+"/"+newfileName);
	}
	
	@ResponseBody
	@RequestMapping(value="/fileUploadPicture")
	public ResultCode fileUploadPicture(String imgdata,HttpServletRequest request) throws Exception {
       
		BASE64Decoder decoder = new BASE64Decoder();
		try { 
	        long time=new Date().getTime();
	        String uploadPath=request.getSession().getServletContext().getRealPath("/upload/");
	        
			String imgPath=uploadPath+"/"+time+".jpg"; 
			
			File imageFile = new File(imgPath);
			
			// 创建输出流
			FileOutputStream outputStream = new FileOutputStream(imageFile);
			// 获得一个图片文件流，我这里是从flex中传过来的
			byte[] result = decoder.decodeBuffer(imgdata.split(",")[1]);//解码
				for (int i = 0; i < result.length; ++i) {
					if (result[i] < 0) {// 调整异常数据
					result[i] += 256;
				}
		    }
			outputStream.write(result);
			outputStream.flush(); 
			outputStream.close(); 
			
			return ResultCode.newRightCode("upload/"+time+".jpg");
		} catch (Exception e1) { 
			
			return ResultCode.newRightCode("上传失败");
		}  
		 
    }
	
	
	/**
	 * ckeditor图片上传
	 * @param request
	 * @param response
	 * @param upload
	 * @throws Exception
	 */ 
	@RequestMapping(value="/upload2",method=RequestMethod.POST)
	public void upload2(MultipartHttpServletRequest request,HttpServletResponse response,@RequestParam MultipartFile upload) throws Exception {
      
        String fileName=upload.getOriginalFilename();
        SimpleDateFormat sdf=new SimpleDateFormat("yyyyMMdd"); 
        String uploadPath=request.getSession().getServletContext().getRealPath("/upload/"+sdf.format(new Date())+"/"); 
         
        File uploadDir=new File(uploadPath);
        if(!uploadDir.exists()){
            uploadDir.mkdirs();
        } 
        File uploadFile=new File(uploadPath+"/"+fileName);
        upload.transferTo(uploadFile);//上传 
        PrintWriter out = response.getWriter();   
        String url = "/upload/"+sdf.format(new Date())+"/" + fileName;   
        String callback = request.getParameter("CKEditorFuncNum");    
        
        String ss="http://taiyuewl.gotoip11.com"; 
        out.println("<script type=\"text/javascript\">");     
        out.println("window.parent.CKEDITOR.tools.callFunction(" + callback     
              + ",'" +ss+url + "',''" + ")");     
        // out.println("window.parent.CKEDITOR.tools.callFunction(" + callback     
       //          + ",'" + TokenThread.host+url + "',''" + ")");     
        out.println("</script>");      
        
    }
	
	public String createnewhtml(HttpServletRequest request,String context) throws IOException{
		String path="";
		Date   now   =   new   Date();  
        SimpleDateFormat   dateFormat   =   new   SimpleDateFormat("yyyyMMdd"); 
        String  hehe  = dateFormat.format(now); 
        
        long nowfile=new Date().getTime();
    	String fileName=nowfile+".html"; 
    	String uploadPath=request.getSession().getServletContext().getRealPath("/upload/"+hehe+"/"); 
    	
        File ml = new File(uploadPath);
        
        if(!ml.exists()) {   
        	ml.mkdir();   
      	}     
        path="/upload/"+hehe+"/"+fileName; 
        File localFile = new File(uploadPath+"/"+fileName);
        if(!localFile.exists()){
        	localFile.createNewFile();
        }
        FileOutputStream out=new FileOutputStream(localFile,true);   
        out.write(context.getBytes("utf-8")); 
        out.close(); 
        return path;  
    }

	public String subStringHTML(String con,int length,String end) {
        String content = ""; 
        
    	content=con.replaceAll("</?[^>]+>",""); 
        content=content.replace("&nbsp;",""); 
        content=content.replace(".",""); 
        content=content.replace("\"","‘");
        content=content.replace("'","‘");
        content=content.replaceAll("\\s*", ""); 
        if(content.length()>length){
        	content=content.substring(0,length)+end;
        }  
        return content;
	} 
	
}
