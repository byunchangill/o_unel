package com.ouenl.alcohol;

import com.ouenl.model.alcohol.AlcoholDto;
import com.ouenl.model.alcohol.AlcoholEntity;
import com.ouenl.model.season.SeasonDto;
import com.ouenl.model.season.SeasonEntity;
import com.ouenl.season.SeasonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ajax/alcohol")
public class AlcoholRestController {
    @Autowired
    private AlcoholService service;

    @GetMapping("/{alcohol}")
    public List<AlcoholEntity> alcoholType(@PathVariable int alcohol) {
        AlcoholDto dto = new AlcoholDto();
        dto.setF_season(alcohol);
        return service.selAlcoholList(dto);
    }
}
