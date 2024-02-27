package com.appdevteam.agrofundx.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Loans {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int LoanId;
    private String LoanName;
    private String Description;
    private int ROI;
    private int minLoanPeriod;
    private int maxLoanPeriod;
    private int minLoanAmount;
    private int maxLoanAmount;
    
}
