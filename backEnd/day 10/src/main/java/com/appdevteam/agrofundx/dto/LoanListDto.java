package com.appdevteam.agrofundx.dto;

import com.appdevteam.agrofundx.entity.App_User;
import com.appdevteam.agrofundx.entity.Loans;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LoanListDto {
    private int id;
    private App_User appUser;
    private Loans loans;
    private int amt;
    private String status;
    private int balance;
}
