package com.appdevteam.agrofundx.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.appdevteam.agrofundx.entity.Loans;

public interface LoansRepo extends JpaRepository<Loans,Integer>{
    
}
