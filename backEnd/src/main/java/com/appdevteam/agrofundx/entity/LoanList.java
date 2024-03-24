package com.appdevteam.agrofundx.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
    private int time;
    private String status;
    private int balance;
    @ManyToOne
    private App_User appUser;

    @ManyToOne
    private Loans loans;

    @OneToMany(mappedBy = "loanList")
    @JsonIgnore
    private List<Payments> payment;
    
}
