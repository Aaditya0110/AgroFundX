package com.appdevteam.agrofundx.service.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.appdevteam.agrofundx.dto.UserDto;
import com.appdevteam.agrofundx.entity.App_User;
import com.appdevteam.agrofundx.repository.UserRepo;
import com.appdevteam.agrofundx.service.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{
    private UserRepo userRepo;

    @Override
    public List<App_User> getAllUsers(){
        return userRepo.findAll();
    }

    @Override
    public UserDto getUserById(int id) {
        App_User user = userRepo.findById(id).orElse(null);
        if (user != null) {
            UserDto userDTO = new UserDto();
            userDTO.setId(user.getId());
            userDTO.setUserName(user.getUserName());
            userDTO.setEmail(user.getEmail());
            userDTO.setPhoneNo(user.getPhoneNo());
            return userDTO;
        } else {
            return null;
        }
    }

    @Override
    public void createUser(UserDto userDto) {
        App_User user = new App_User();
        user.setUserName(userDto.getUserName());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setPhoneNo(userDto.getPhoneNo());
        userRepo.save(user);
    }
}
