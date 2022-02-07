package com.ouenl.season;

import com.ouenl.model.ResultVo;
import com.ouenl.model.season.SeasonDto;
import com.ouenl.model.season.SeasonEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SeasonMapper {
    List<SeasonEntity> selSeasonList(SeasonEntity entity);
    ResultVo selMaxPageVal(SeasonDto dto);
}
