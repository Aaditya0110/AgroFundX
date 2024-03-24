package com.appdevteam.agrofundx.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.appdevteam.agrofundx.entity.UserInfo;
import com.appdevteam.agrofundx.repository.UserInfoRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/UserInfo")
@CrossOrigin(origins = "http://localhost:5173/")
public class UserInfoController {
    @Autowired
    UserInfoRepository userRepo;
    
    @GetMapping("/id-with-username/{username}")
    public ResponseEntity<Integer> getIdWithUsername(@PathVariable String username) {
        Optional<UserInfo> userOptional = userRepo.findByName(username);
        if (userOptional.isPresent()) {
            UserInfo user = userOptional.get();
            return ResponseEntity.ok(user.getId());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    
    @GetMapping("/role-with-userName/{userName}")
    public ResponseEntity<String> getRoleWithUserId(@PathVariable String userName) {
        UserInfo userInfo = userRepo.findByName(userName).orElse(null);
        if (userInfo != null) {
            return ResponseEntity.ok(userInfo.getRoles());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
