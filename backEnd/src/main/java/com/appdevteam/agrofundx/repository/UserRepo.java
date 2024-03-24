package com.appdevteam.agrofundx.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.appdevteam.agrofundx.entity.App_User;
import com.appdevteam.agrofundx.entity.UserInfo;

public interface UserRepo extends JpaRepository<App_User, Integer> {
    App_User findByUserInfo(UserInfo userInfo);

    App_User findByUserName(String username);


    // App_User findByUserName(String username);

}
