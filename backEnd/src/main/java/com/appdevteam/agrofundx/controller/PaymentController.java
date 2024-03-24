package com.appdevteam.agrofundx.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.appdevteam.agrofundx.dto.PaymentDto;
import com.appdevteam.agrofundx.entity.Payments;
import com.appdevteam.agrofundx.service.PaymentService;
import lombok.AllArgsConstructor;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/payments")
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    @PostMapping("/new")
    public void addPayment(@RequestBody PaymentDto paymentDto){
        paymentService.addPayment(paymentDto);
        System.out.println(paymentDto.getAmount());
    }

    // @GetMapping("/get/{id}")
    // public void getPaymentsByLoanListId(@Path)

     @GetMapping("/user/{userId}")
    public List<Payments> getAllPaymentsByUserId(@PathVariable int userId) {
        return paymentService.getAllPaymentsByUserId(userId);
    }
}
