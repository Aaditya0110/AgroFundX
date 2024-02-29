package com.appdevteam.agrofundx.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.appdevteam.agrofundx.dto.Requests.UsersLoans;
import com.appdevteam.agrofundx.entity.LoanList;
import com.appdevteam.agrofundx.service.LoanListService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("api/LoanList/")
public class LoanListController {
    @Autowired
    LoanListService loanListService;

    @GetMapping("/{id}")
    public List<UsersLoans> getUsersLoans(@PathVariable("id") int userid){
        return loanListService.getUsersLoans(userid);
    }

    @PostMapping("/post/{id}/{lid}")
    public LoanList setUsersLoansList(@PathVariable("id") int userid,@PathVariable("lid") int loanid){
        return loanListService.setUsersLoansList(userid, loanid);
    }
}
