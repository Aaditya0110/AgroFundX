package com.appdevteam.agrofundx.service.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;
import com.appdevteam.agrofundx.dto.LoansDto;
import com.appdevteam.agrofundx.entity.Loans;
import com.appdevteam.agrofundx.repository.LoansRepo;
import com.appdevteam.agrofundx.service.LoansService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LoansServiceImpl implements LoansService{
    private LoansRepo loansRepo;

    @Override
    public List<Loans> getAllLoans(){
        return loansRepo.findAll();
    }

    @Override
    public LoansDto getLoanById(int id){
        Loans loan=loansRepo.findById(id).orElse(null);
        if(loan!=null){
            LoansDto loansDto=new LoansDto();
            loansDto.setLoanId(loan.getLoanId());
            loansDto.setDescription(loan.getDescription());
            loansDto.setLoanName(loan.getLoanName());
            loansDto.setMaxLoanAmount(loan.getMaxLoanAmount());
            loansDto.setMaxLoanPeriod(loan.getMaxLoanPeriod());
            loansDto.setMinLoanAmount(loan.getMaxLoanAmount());
            loansDto.setMaxLoanPeriod(loan.getMaxLoanAmount());
            loansDto.setROI(loan.getROI());
            return loansDto;
        }
        else{
            return null;
        }
    }

    @Override
    public void createLoan(LoansDto loansDto){
        Loans loans=new Loans();
        loans.setDescription(loansDto.getDescription());
        loans.setLoanName(loansDto.getLoanName());
        loans.setMaxLoanAmount(loansDto.getMaxLoanAmount());
        loans.setMaxLoanPeriod(loansDto.getMaxLoanPeriod());
        loans.setMinLoanAmount(loansDto.getMaxLoanAmount());
        loans.setMaxLoanPeriod(loansDto.getMaxLoanAmount());
        loans.setROI(loansDto.getROI());
        loansRepo.save(loans);
    }
}
