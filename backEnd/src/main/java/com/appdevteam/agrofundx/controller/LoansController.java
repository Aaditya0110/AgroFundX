package com.appdevteam.agrofundx.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.appdevteam.agrofundx.dto.LoansDto;
import com.appdevteam.agrofundx.dto.Requests.LoansUsers;
import com.appdevteam.agrofundx.entity.Loans;
import com.appdevteam.agrofundx.service.LoansService;
import lombok.AllArgsConstructor;


@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/Loans")
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

     @PostMapping("/post")
     @PreAuthorize("hasAuthority('ADMIN')")
    public void createLoan(@RequestBody LoansDto loansDto) {
        loansService.createLoan(loansDto);
    }

    @PutMapping("/update")
    // @PreAuthorize("hasAuthority('ADMIN')")
    public void editLoan(@RequestBody LoansDto loansDto){
        loansService.editLoan(loansDto);
    }

    @DeleteMapping("/delete/{id}")
    // @PreAuthorize("hasAuthority('ADMIN')")
    public String deleteLoan(@PathVariable int id){
        return loansService.deleteLoan(id);
    }
    
    @GetMapping("/loansUsers/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<LoansUsers> getLoansUsers(@PathVariable int id) {
        return loansService.getLoansUsers(id);
    }
}
