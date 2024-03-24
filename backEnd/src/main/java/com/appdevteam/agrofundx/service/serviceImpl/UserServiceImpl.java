package com.appdevteam.agrofundx.service.serviceImpl;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.appdevteam.agrofundx.dto.UserDto;
import com.appdevteam.agrofundx.entity.App_User;
import com.appdevteam.agrofundx.entity.UserInfo;
import com.appdevteam.agrofundx.repository.UserInfoRepository;
import com.appdevteam.agrofundx.repository.UserRepo;
import com.appdevteam.agrofundx.service.UserService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{
    private UserRepo userRepo;

    private final String folder="C:\\Users\\aadit\\Desktop\\appdev\\files\\";

    @Autowired
    private UserInfoRepository userInfoRepo;


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

    @Override
    public String editUser(UserDto userDto){
        App_User user = userRepo.findById(userDto.getId()).orElse(null);
    
   
        if(user == null) {
            return ("User not found with id: " + userDto.getId());
        }
        user.setUserName(userDto.getUserName());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setPhoneNo(userDto.getPhoneNo());
        userRepo.save(user);
        return "User edited";
    }

    @Override
    public String deleteUser(){
        Authentication curUser= SecurityContextHolder.getContext().getAuthentication();
        String curName=curUser.getName();
        UserInfo userInfo=userInfoRepo.findByName(curName).orElse(null);
        if(userInfo.getRoles().equals("ADMIN"))
        {
            return "ADMIN can't Deleted";
        }
        App_User appUser=userRepo.findByUserInfo(userInfo);
        if(!appUser.getLoans().isEmpty())
        {
            return "User has Pending Loans";
        }
        userRepo.deleteById(appUser.getId());
        userInfoRepo.deleteById(userInfo.getId());
        return "User Deleted!";
        
    }
    @Override
    public App_User updateDocs(int user_id,MultipartFile aadarf,MultipartFile pancardf,MultipartFile landdocf) throws IllegalStateException, IOException
    {
        App_User app_User=userRepo.findById(user_id).orElse(null);
        if(app_User!=null)
        {
            File dir=new File(folder+app_User.getUserName());
            if(!dir.exists())
            {
                dir.mkdir();
            }
            String aadar=folder+app_User.getUserName()+"\\aadar.pdf";
            String pancard=folder+app_User.getUserName()+"\\pancard.pdf";
            String landdoc=folder+app_User.getUserName()+"\\landdoc.pdf";
            aadarf.transferTo(new File(aadar));
            pancardf.transferTo(new File(pancard));
            landdocf.transferTo(new File(landdoc));
            app_User.setAadar(aadar);
            app_User.setPancard(pancard);
            app_User.setLanddoc(landdoc);
            return userRepo.save(app_User);
        }
        else
        {
            return null;
        }
    }

    @Override
    public ByteArrayResource getFile(int user_id,String file) throws IOException
    {
        App_User app_User=userRepo.findById(user_id).orElse(null);
        Path filePath=Paths.get("C:\\Users\\aadit\\Desktop\\appdev\\files\\Hariprasath\\aadar.pdf");
        ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(filePath));
        return resource;
    }
}
