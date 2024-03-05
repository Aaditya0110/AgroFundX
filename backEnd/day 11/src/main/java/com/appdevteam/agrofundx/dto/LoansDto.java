package com.appdevteam.agrofundx.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LoansDto {
    private int LoanId;
    private String LoanName;
    private String Description;
    private int ROI;
    private int minLoanPeriod;
    private int maxLoanPeriod;
    private int minLoanAmount;
    private int maxLoanAmount;
}
