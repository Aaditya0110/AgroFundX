package com.appdevteam.agrofundx.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.appdevteam.agrofundx.dto.UserDto;
import com.appdevteam.agrofundx.entity.App_User;
import com.appdevteam.agrofundx.service.UserService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/User")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/users")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<App_User>> getAllUsers() {
        List<App_User> tuser= userService.getAllUsers();
        return ResponseEntity.ok(tuser);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable("id") int id) {
        UserDto userDTO = userService.getUserById(id);
        return ResponseEntity.ok(userDTO);
    }
    
    //  @PostMapping("/post")
    // public void createUser(@RequestBody UserDto userDto) {
    //     userService.createUser(userDto);
    // }

    @PutMapping("/update")
    public void editUser(@RequestBody UserDto userDto){
        userService.editUser(userDto);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable int id){
        userService.deleteUser(id);
    }
}
