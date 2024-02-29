package com.appdevteam.agrofundx.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class LoanList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int amt;
    private String status;
    @ManyToOne
    private App_User appUser;

    @ManyToOne
    private Loans loans;
    
}
