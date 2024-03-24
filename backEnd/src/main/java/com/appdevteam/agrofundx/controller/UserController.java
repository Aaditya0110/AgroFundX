package com.appdevteam.agrofundx.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.apache.tomcat.util.file.ConfigurationSource.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.appdevteam.agrofundx.dto.UserDto;
import com.appdevteam.agrofundx.entity.App_User;
import com.appdevteam.agrofundx.repository.UserRepo;
import com.appdevteam.agrofundx.service.UserService;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestParam;


@AllArgsConstructor
@RestController
@RequestMapping("/api/User")
@CrossOrigin(origins = "http://localhost:5173/")
public class UserController {
    private final String folder="C:\\Users\\aadit\\Desktop\\appdev\\files\\";

    @Autowired
    UserService userService;

    @Autowired
    private UserRepo userRepo;


    @GetMapping("/users")
    // @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<App_User>> getAllUsers() {
        List<App_User> tuser= userService.getAllUsers();
        return ResponseEntity.ok(tuser);
    }

    @GetMapping("/id-with-username/{username}")
    public ResponseEntity<Integer> getIdWithUsername(@PathVariable String username) {
        App_User user = userRepo.findByUserName(username);
        if (user != null) {
            return ResponseEntity.ok(user.getId());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
//     @GetMapping("/user-info/{id}")
// public ResponseEntity<UserInfo> getUserInfoById(@PathVariable int id) {
//     Optional<UserInfo> userInfoOptional = repository.findById(id);
//     if (userInfoOptional.isPresent()) {
//         UserInfo userInfo = userInfoOptional.get();
//         return ResponseEntity.ok(userInfo);
//     } else {
//         return ResponseEntity.notFound().build();
//     }
// }
    

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
    public String editUser(@RequestBody UserDto userDto){
        return userService.editUser(userDto);
    }

    @DeleteMapping("/delete")
    public String deleteUser(){
        return userService.deleteUser();
    }

    @PutMapping("/addDocs/{id}")
    public App_User addDocs(@PathVariable("id") int user_id,@RequestPart("aadar") MultipartFile aadar,@RequestPart("pancard") MultipartFile pancard,@RequestPart("landdoc") MultipartFile landdoc) throws IllegalStateException, IOException
    {
        return userService.updateDocs(user_id, aadar, pancard, landdoc);
    }

    @GetMapping("/getFile/{id}/{file}")
    public ResponseEntity<byte[]> getFile(@PathVariable("id") int user_id,@PathVariable("file") String file) throws IOException {
        App_User app_User=userRepo.findById(user_id).orElse(null);
        Path path = Paths.get(folder+app_User.getUserName()+"\\"+file);
        System.out.println(file);
        byte[] pdfBytes = Files.readAllBytes(path);
        
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.setContentDispositionFormData("filename", file);
        
        return new ResponseEntity<>(pdfBytes, headers, HttpStatus.OK);
    }
    
}
