package com.ouenl.alcohol;

import com.ouenl.model.alcohol.AlcoholEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AlcoholMapper {
    List<AlcoholEntity> selAlcoholList(AlcoholEntity entity);
}
