package com.appdevteam.agrofundx.dto.Requests;

import com.appdevteam.agrofundx.entity.Loans;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UsersLoans {
    private int id;
    private int amt;
    private String status;
    private Loans loans;
}
