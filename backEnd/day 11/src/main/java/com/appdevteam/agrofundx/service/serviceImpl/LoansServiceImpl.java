package com.appdevteam.agrofundx.service.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import com.appdevteam.agrofundx.dto.LoansDto;
import com.appdevteam.agrofundx.dto.Requests.LoansUsers;
import com.appdevteam.agrofundx.entity.LoanList;
import com.appdevteam.agrofundx.entity.Loans;
import com.appdevteam.agrofundx.repository.LoansRepo;
import com.appdevteam.agrofundx.service.LoansService;

import jakarta.persistence.EntityNotFoundException;
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
            loansDto.setMinLoanAmount(loan.getMinLoanAmount());
            loansDto.setMinLoanPeriod(loan.getMinLoanPeriod());
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
        loans.setMinLoanAmount(loansDto.getMinLoanAmount());
        loans.setMaxLoanPeriod(loansDto.getMaxLoanAmount());
        loans.setROI(loansDto.getROI());
        loansRepo.save(loans);
    }

    @Override
    public void editLoan(LoansDto loansDto){
        Loans loans = loansRepo.findById(loansDto.getLoanId()).orElse(null);
    
   
        if(loans == null) {
            throw new EntityNotFoundException("Loan not found with id: " + loansDto.getLoanId());
        }
        loans.setDescription(loansDto.getDescription());
        loans.setLoanName(loansDto.getLoanName());
        loans.setMaxLoanAmount(loansDto.getMaxLoanAmount());
        loans.setMaxLoanPeriod(loansDto.getMaxLoanPeriod());
        loans.setMinLoanAmount(loansDto.getMaxLoanAmount());
        loans.setMaxLoanPeriod(loansDto.getMaxLoanAmount());
        loans.setROI(loansDto.getROI());
        loansRepo.save(loans);
    }

    public void deleteLoan(int id){
        Loans loans = loansRepo.findById(id).orElse(null);
        
    if(loans == null) {
        throw new EntityNotFoundException("Loan not found with id: " + id);
    }

    loansRepo.delete(loans);
    }

    public List<LoansUsers> getLoansUsers(int id){
        Loans loans=loansRepo.findById(id).orElse(null);
        if(loans!=null){
            List<LoanList> loanLists=loans.getLoans();
            List<LoansUsers> lu=new ArrayList<>();
            for(LoanList t:loanLists){
                lu.add(new LoansUsers(t.getId(),t.getAppUser()));
            }
            return lu;

        }
        else{
            return null;
        }
    }
}