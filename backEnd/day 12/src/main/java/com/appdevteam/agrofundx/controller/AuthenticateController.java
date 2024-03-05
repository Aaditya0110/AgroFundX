package com.appdevteam.agrofundx.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.Authentication;
import org.springframework.security.authentication.AuthenticationManager;
import com.appdevteam.agrofundx.dto.Requests.AuthRequest;
import com.appdevteam.agrofundx.entity.Admin;
import com.appdevteam.agrofundx.entity.App_User;
import com.appdevteam.agrofundx.entity.UserInfo;
import com.appdevteam.agrofundx.repository.AdminRepo;
import com.appdevteam.agrofundx.repository.UserInfoRepository;
import com.appdevteam.agrofundx.repository.UserRepo;
import com.appdevteam.agrofundx.service.JwtService;

@RestController
@RequestMapping("/auth")
public class AuthenticateController {
    
    @Autowired
    private AuthenticationManager authenticationManager;
    
    @Autowired
    private JwtService jwtService;
    
    @Autowired
    private UserInfoRepository repository;

    @Autowired
    private AdminRepo adminRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @PostMapping("/new")
        public String addNewUser(@RequestBody UserInfo userInfo) {
            userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
            repository.save(userInfo);
            if(userInfo.getRoles().equals("ADMIN")){
                Admin admin=new Admin();
                admin.setUserInfo(userInfo);
                admin.setUserName(userInfo.getName());
                adminRepo.save(admin);
            }
            else{
                App_User app_User=new App_User();
                app_User.setUserInfo(userInfo);
                app_User.setUserName(userInfo.getName());
                userRepo.save(app_User);
            }
            return "user added to system ";
        }


    @PostMapping("/auth")
    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
            if (authentication.isAuthenticated()) {
                return jwtService.generateToken(authRequest.getUsername());
            } else {
                throw new UsernameNotFoundException("invalid user request !");
            }
    }
}
