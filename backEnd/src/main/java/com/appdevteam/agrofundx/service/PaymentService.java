package com.appdevteam.agrofundx.service;

import java.util.List;

import com.appdevteam.agrofundx.dto.PaymentDto;
import com.appdevteam.agrofundx.entity.Payments;

public interface PaymentService {
    // Payments getPaymentById(int id);

    List<PaymentDto> getPaymentsByLoanListId(int loanListId);

    void addPayment(PaymentDto paymentDto);

    public List<Payments> getAllPaymentsByUserId(int userId);
}
