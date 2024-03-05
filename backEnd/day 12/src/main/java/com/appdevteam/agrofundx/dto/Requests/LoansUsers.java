package com.appdevteam.agrofundx.dto.Requests;

import com.appdevteam.agrofundx.entity.App_User;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class LoansUsers {
    int id;
    @JsonProperty("appUser")
    App_User app_User;
}
