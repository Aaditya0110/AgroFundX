package com.appdevteam.agrofundx.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.appdevteam.agrofundx.entity.LoanList;

public interface LoanListRepo extends JpaRepository<LoanList,Integer>{
    
}
