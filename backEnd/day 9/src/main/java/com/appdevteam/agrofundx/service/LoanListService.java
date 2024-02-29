package com.appdevteam.agrofundx.service;

import java.util.List;

import com.appdevteam.agrofundx.dto.Requests.UsersLoans;
import com.appdevteam.agrofundx.entity.LoanList;

public interface LoanListService {
    public LoanList setUsersLoansList(int userid,int loanid);

    public List<UsersLoans> getUsersLoans(int userid);
}
