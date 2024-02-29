package com.appdevteam.agrofundx.service.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.appdevteam.agrofundx.dto.Requests.UsersLoans;
import com.appdevteam.agrofundx.entity.App_User;
import com.appdevteam.agrofundx.entity.LoanList;
import com.appdevteam.agrofundx.entity.Loans;
import com.appdevteam.agrofundx.repository.LoanListRepo;
import com.appdevteam.agrofundx.repository.LoansRepo;
import com.appdevteam.agrofundx.repository.UserRepo;
import com.appdevteam.agrofundx.service.LoanListService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LoanListServiceImpl implements LoanListService{
    private LoanListRepo loanListRepo;
    private LoansRepo loansRepo;
    private UserRepo userRepo;


    @Override
    public LoanList setUsersLoansList(int userid,int loanid){
        LoanList loanList=new LoanList();
        App_User app_User=userRepo.findById(userid).orElse(null);
        Loans loans=loansRepo.findById(loanid).orElse(null);
        if(loanList!=null && app_User!=null){
            loanList.setAppUser(app_User);
            loanList.setLoans(loans);
            return loanListRepo.save(loanList);
        }
        else{
            return null;
        }
    }

    @Override
    public List<UsersLoans> getUsersLoans(int userid){
        App_User app_User=userRepo.findById(userid).orElse(null);
        List<LoanList> loanList=app_User.getLoans();
        List<UsersLoans> usersLoans=new ArrayList<>();
        for(LoanList temp:loanList){
            UsersLoans userloan=new UsersLoans();
            userloan.setId(temp.getId());
            userloan.setLoans(temp.getLoans());
            userloan.setStatus(temp.getStatus());
            userloan.setAmt(temp.getAmt());
            usersLoans.add(userloan);
        }
        return usersLoans;
    }
}
