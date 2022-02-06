package com.ouenl.season;

import com.ouenl.model.season.SeasonDto;
import com.ouenl.model.season.SeasonEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeasonService {
    @Autowired
    private SeasonMapper mapper;

    public List<SeasonEntity> selSeasonList(SeasonDto dto) {
        return mapper.selSeasonList(dto);
    }
}
