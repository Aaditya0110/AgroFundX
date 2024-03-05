package com.appdevteam.agrofundx.service.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import com.appdevteam.agrofundx.dto.PaymentDto;
import com.appdevteam.agrofundx.entity.LoanList;
import com.appdevteam.agrofundx.entity.Payments;
import com.appdevteam.agrofundx.repository.LoanListRepo;
import com.appdevteam.agrofundx.repository.PaymentRepo;
import com.appdevteam.agrofundx.service.PaymentService;

@Service
public class PaymentServiceImpl implements PaymentService {
     private PaymentRepo paymentRepo;

     @Autowired
     private LoanListRepo loanListRepo;

    @Override
    public List<PaymentDto> getPaymentsByLoanListId(int loanListId) {
        List<Payments> pay=paymentRepo.findByLoanListId(loanListId);
        List<PaymentDto> paylistDto=new ArrayList<>();
        for(Payments t:pay){
            PaymentDto payDto=new PaymentDto();
            payDto.setId(t.getId());
            payDto.setAmount(t.getAmount());
            // payDto.setDateANDtime();
            paylistDto.add(payDto);
        }
        return paylistDto;
    }

    // public void setPayment(int LoanListId,int amount){
    //     Payments pay=new Payments();
    //     // LocalDate currentDate = LocalDate.now();
    //     pay.setAmount(amount);
    //     // pay.setDate(currentDate);
    // }

    @Override
    public void addPayment(PaymentDto paymentDto) {
        Payments payment=new Payments();
        LoanList loanList=loanListRepo.findById(paymentDto.getLoanListId()).orElse(null);
        payment.setId(paymentDto.getId());
        payment.setAmount(paymentDto.getAmount());
        payment.setLoanList(loanList);
        paymentRepo.save(payment);
    }
}
