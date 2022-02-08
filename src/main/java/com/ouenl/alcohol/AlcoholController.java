package com.ouenl.alcohol;

import com.ouenl.Const;
import com.ouenl.model.alcohol.AlcoholDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/alcohol")
public class AlcoholController {
    @Autowired
    private AlcoholService service;

    @GetMapping("/list")
    public String alcoholList(AlcoholDto dto, Model model) {
        model.addAttribute(Const.LIST, service.selAlcoholList(dto));
        return "alcohol/list";
    }
}
