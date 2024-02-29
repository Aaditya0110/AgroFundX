package com.appdevteam.agrofundx.service;

import java.util.List;
import com.appdevteam.agrofundx.dto.LoansDto;
import com.appdevteam.agrofundx.entity.Loans;

public interface LoansService {
    List<Loans> getAllLoans();

    LoansDto getLoanById(int id);

    void createLoan(LoansDto loansDto);
}
