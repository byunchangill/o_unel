package com.ouenl.season;

import com.ouenl.model.season.SeasonDto;
import com.ouenl.model.season.SeasonEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SeasonMapper {
    List<SeasonEntity> selSeasonList(SeasonEntity entity); // 계절별 리스트
    int selMaxPageVal(SeasonDto dto);
}
