package com.appdevteam.agrofundx.entity;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class App_User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String userName;
    private String password;
    private String email;
    private int phoneNo;

    @OneToMany(mappedBy = "appUser")
    @JsonIgnore
    private List<LoanList> loans;
    
    @OneToOne
    @JoinColumn(name="userId")
    UserInfo userInfo;
}
