package com.appdevteam.agrofundx.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.appdevteam.agrofundx.entity.Payments;

public interface PaymentRepo extends JpaRepository<Payments,Integer>{
    List<Payments> findByLoanListId(int loanListId);
}
