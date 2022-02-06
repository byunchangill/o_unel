package com.ouenl.alcohol;

import com.ouenl.model.alcohol.AlcoholDto;
import com.ouenl.model.alcohol.AlcoholEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlcoholService {
    @Autowired
    private AlcoholMapper mapper;

    public List<AlcoholEntity> selAlcoholList(AlcoholDto dto) {
        return mapper.selAlcoholList(dto);
    }
}
