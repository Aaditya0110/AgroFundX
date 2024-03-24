package com.appdevteam.agrofundx.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.appdevteam.agrofundx.entity.Payments;

@Repository
public interface PaymentRepo extends JpaRepository<Payments,Integer>{
    List<Payments> findByLoanListId(int loanListId);

    List<Payments> findAllByLoanList_AppUser_Id(int userId);
}
