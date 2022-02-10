package com.ouenl.model.season;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SeasonDto extends SeasonEntity {
    private int  ifood;
    private int page;
    private int currentPage;
    private int recordCount;
    private int startIdx;
}
