package com.appdevteam.agrofundx.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.appdevteam.agrofundx.entity.App_User;

public interface UserRepo extends JpaRepository<App_User,Integer>{
    
}
