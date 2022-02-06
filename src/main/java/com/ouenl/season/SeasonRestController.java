package com.ouenl.season;

import com.ouenl.model.season.SeasonDto;
import com.ouenl.model.season.SeasonEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ajax/season")
public class SeasonRestController {

    @Autowired
    private SeasonService service;

    @GetMapping("/{season}")
    public List<SeasonEntity> seasonType(@PathVariable int season) {
        SeasonDto dto = new SeasonDto();
        dto.setF_season(season);
        return service.selSeasonList(dto);
    }
}