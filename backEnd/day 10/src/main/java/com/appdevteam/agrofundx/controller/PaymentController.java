package com.appdevteam.agrofundx.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.appdevteam.agrofundx.dto.PaymentDto;
import com.appdevteam.agrofundx.service.PaymentService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/payments")
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    @PostMapping("/new")
    public void addPayment(@RequestBody PaymentDto paymentDto){
        paymentService.addPayment(paymentDto);
    }

    // @GetMapping("/get/{id}")
    // public void getPaymentsByLoanListId(@Path)
}
