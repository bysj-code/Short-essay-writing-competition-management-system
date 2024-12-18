package com.dao;

import com.entity.BanjiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.BanjiVO;
import com.entity.view.BanjiView;


/**
 * 班级
 * 
 * @author 
 * @email 
 * @date 2023-05-15 14:23:36
 */
public interface BanjiDao extends BaseMapper<BanjiEntity> {
	
	List<BanjiVO> selectListVO(@Param("ew") Wrapper<BanjiEntity> wrapper);
	
	BanjiVO selectVO(@Param("ew") Wrapper<BanjiEntity> wrapper);
	
	List<BanjiView> selectListView(@Param("ew") Wrapper<BanjiEntity> wrapper);

	List<BanjiView> selectListView(Pagination page,@Param("ew") Wrapper<BanjiEntity> wrapper);
	
	BanjiView selectView(@Param("ew") Wrapper<BanjiEntity> wrapper);
	

}
