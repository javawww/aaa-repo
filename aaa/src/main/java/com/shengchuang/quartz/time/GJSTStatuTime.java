package com.shengchuang.quartz.time;

import java.io.IOException;
import java.io.Reader;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.quartz.StatefulJob;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.quartz.QuartzJobBean;

import com.shengchuang.entity.GJSTStatusEntity;
import com.shengchuang.entity.TreePlantStatEntity;
import com.shengchuang.service.GjstService;
import com.shengchuang.service.SystemParamService;
import com.shengchuang.service.TreeService;


/**
 * 树的种植状态定时器  针对全网所有玩家所有TREE的监听  
 * 再玩家无需登录操作和干预情况下 也可以实时的更新数据
 * @author Administrator
 *
 */
public class GJSTStatuTime extends  QuartzJobBean{

	@Autowired
	private GjstService gjstService;
	
	@Override
	protected void executeInternal(JobExecutionContext context) throws JobExecutionException {
	}
	
	public void startCheck(){
		updateGj();
		updateSt();
	}
	
	public void updateGj(){
		Date now = new Date();
		List<GJSTStatusEntity> gl = gjstService.findAllLiveGj();
		
		if(gl.size()>0){
			for (GJSTStatusEntity g : gl) {
//				if(now.after(g.getGjOverTime())){
				if(now.getTime() - g.getGjOverTime().getTime() > 0){
					g.setGjStatus(0);
					gjstService.updateCommon(g);
				}
			}
		}
	}
	
	public void updateSt(){
		Date now = new Date();
		List<GJSTStatusEntity> sl = gjstService.findAllLiveSt();
		
		if(sl.size()>0){
			for (GJSTStatusEntity g : sl) {
//				if(now.after(g.getStOverTime())){
				if(now.getTime() - g.getStOverTime().getTime() > 0){
					g.setStStatus(0);
					gjstService.updateCommon(g);
				}
			}
		}
	}
}
