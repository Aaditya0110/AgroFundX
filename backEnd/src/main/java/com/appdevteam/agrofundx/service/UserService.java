package com.appdevteam.agrofundx.service;

import java.io.IOException;
import java.util.List;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.web.multipart.MultipartFile;

import com.appdevteam.agrofundx.dto.UserDto;
import com.appdevteam.agrofundx.entity.App_User;

public interface UserService {
    List<App_User> getAllUsers();

    UserDto getUserById(int id);

    void createUser(UserDto userDto);

    String editUser(UserDto userDto);

    String deleteUser();

    App_User updateDocs(int user_id,MultipartFile aadar,MultipartFile pancard,MultipartFile landdoc) throws IllegalStateException, IOException;
    ByteArrayResource getFile(int user_id,String file) throws IOException;
}

