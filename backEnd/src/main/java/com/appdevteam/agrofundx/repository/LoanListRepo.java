package com.appdevteam.agrofundx.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.appdevteam.agrofundx.entity.LoanList;
import com.appdevteam.agrofundx.entity.Payments;

public interface LoanListRepo extends JpaRepository<LoanList,Integer>{

    List<LoanList> findByStatus(String string);

    List<Payments> findPaymentsByAppUser_Id(int userId);
    
}
