package com.appdevteam.agrofundx.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.appdevteam.agrofundx.dto.LoansDto;
import com.appdevteam.agrofundx.entity.Loans;
import com.appdevteam.agrofundx.service.LoansService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/Loans/")
public class LoansController {
    @Autowired
    LoansService loansService;

    @GetMapping("/loans")
    public ResponseEntity<List<Loans>> getAllLoans() {
        List<Loans> tloan= loansService.getAllLoans();
        return ResponseEntity.ok(tloan);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LoansDto> getLoanById(@PathVariable("id") int id){
        LoansDto loandto = loansService.getLoanById(id);
        return ResponseEntity.ok(loandto);
    }
}
