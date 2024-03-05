package com.appdevteam.agrofundx.service;

import java.util.List;
import com.appdevteam.agrofundx.dto.LoansDto;
import com.appdevteam.agrofundx.dto.Requests.LoansUsers;
import com.appdevteam.agrofundx.entity.Loans;

public interface LoansService {
    List<Loans> getAllLoans();

    LoansDto getLoanById(int id);

    void createLoan(LoansDto loansDto);

    void editLoan(LoansDto loansDto);

    void deleteLoan(int id);

    List<LoansUsers> getLoansUsers(int id);
}
