package com.appdevteam.agrofundx.dto.Requests;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class getLoanDto {
    private int amt;
    private String status;
    private int balance;
}
