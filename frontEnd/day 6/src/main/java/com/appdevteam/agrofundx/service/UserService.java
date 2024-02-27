package com.appdevteam.agrofundx.service;

import java.util.List;

import com.appdevteam.agrofundx.dto.UserDto;
import com.appdevteam.agrofundx.entity.App_User;

public interface UserService {
    List<App_User> getAllUsers();
    UserDto getUserById(int id);

}

