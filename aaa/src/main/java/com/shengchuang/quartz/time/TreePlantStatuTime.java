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

import com.shengchuang.entity.TreePlantStatEntity;
import com.shengchuang.service.SystemParamService;
import com.shengchuang.service.TreeService;
import com.shengchuang.web.controller.BaseController;


/**
 * 树的种植状态定时器  针对全网所有玩家所有TREE的监听  
 * 再玩家无需登录操作和干预情况下 也可以实时的更新数据
 * @author Administrator
 *
 */
public class TreePlantStatuTime extends  QuartzJobBean{

	@Resource(name = "treeService")
	private TreeService 					treeService;//注入业务层  实现数据动态交互
	@Resource(name = "systemParamService")
	private SystemParamService 				systemParamService;
	@Override
	protected void executeInternal(JobExecutionContext context) throws JobExecutionException {
	}
	 protected static org.apache.log4j.Logger log = org.apache.log4j.LogManager.getLogger(TreePlantStatuTime.class);
	
	/**
	 * 定时器 ：定时扫描并根据当前时间 判断 如果用户TREE已经超过收益时间 则需要系统自动更新下次的收益时间
	 */
	public void updateTreePlants(){
		Date  currentTime = new Date();
//		String currentTimestr = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(currentTime);
		List<TreePlantStatEntity> treePlants = treeService.getAllTrees();
		if(treePlants.size()>0){
			//这里不区分金树银树  对应的配置参数已经存在对应TREE信息中
			for (TreePlantStatEntity treePlantStat : treePlants) {
				//日分红产能周期 分钟 示例5分钟 
				int addminuts = treePlantStat.getCapaCycle() * 60 * 1000 * (treePlantStat.getGainCounts()+1);
				Date nextGainTime = new Date(treePlantStat.getPlantTime().getTime() + addminuts);
//				Date gainTime = new Date(treePlantStat.getGainTime().getTime());
//				String nextGainTimestr = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(nextGainTime);
//				int i = new Date().compareTo(treePlantStat.getOverTime());
//				boolean isclickBool = currentTimestr.equals(nextGainTimestr);
				
//				boolean isclickBool = currentTime.after(nextGainTime);
				boolean isclickBool = currentTime.getTime() - nextGainTime.getTime() > 0;
				//如果当前时间 在 下次收益时间的 后面  说明到了系统自动更新用户种树状态的时候
//				boolean isclickBool2 = currentTime.after(gainTime) && treePlantStat.getGainCounts() == 0;
//				boolean isclickBool =  currentTime.compareTo(treePlantStat.getGainTime()) == 0 ;
//				String overTimestr = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(treePlantStat.getOverTime());
//				boolean isOver = currentTimestr.equals(overTimestr);
//				boolean isOver = currentTime.after(treePlantStat.getOverTime());
				boolean isOver = currentTime.getTime() - treePlantStat.getOverTime().getTime() > 0;
				log.info("======编号"+treePlantStat.getTreeNo()+":======="+(currentTime.getTime() - treePlantStat.getOverTime().getTime()));
				//产能没有耗尽
				if(isOver){
					treePlantStat.setIsGain(3);
					treePlantStat.setShySalar(new BigDecimal(0));
				}else{
					if(isclickBool){
						treePlantStat.setGainTime(nextGainTime);
						treePlantStat.setShySalar(treePlantStat.getCapacity());
						treePlantStat.setIsGain(1);
						treePlantStat.setGainCounts(treePlantStat.getGainCounts()+1);
					}
				}
				//更新金树银树 种植状态
				treeService.updateTreePlants(treePlantStat);
			}
		}
	}
}
