package com.appdevteam.agrofundx.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.appdevteam.agrofundx.entity.Admin;
 
public interface AdminRepo extends JpaRepository<Admin,Integer>{
    
}
