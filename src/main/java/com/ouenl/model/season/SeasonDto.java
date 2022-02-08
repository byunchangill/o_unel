package com.ouenl.model.season;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SeasonDto extends SeasonEntity {
    private int page = 1;
    private int startIdx;
    private int recordCnt = 10;
}
