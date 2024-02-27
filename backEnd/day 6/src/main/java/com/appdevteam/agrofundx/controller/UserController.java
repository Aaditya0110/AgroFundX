package com.appdevteam.agrofundx.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.appdevteam.agrofundx.dto.UserDto;
import com.appdevteam.agrofundx.entity.App_User;
import com.appdevteam.agrofundx.service.UserService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/User/")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<App_User>> getAllUsers() {
        List<App_User> tuser= userService.getAllUsers();
        return ResponseEntity.ok(tuser);
    }

     @GetMapping("/users/{id}")
    public ResponseEntity<?> getUserById(@PathVariable("id") int id) {
        try {
            UserDto userDTO = userService.getUserById(id);
            if (userDTO != null) {
                return ResponseEntity.ok(userDTO);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to retrieve user: " + e.getMessage());
        }
    }


    
}
