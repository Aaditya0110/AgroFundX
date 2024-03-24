package com.appdevteam.agrofundx.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.appdevteam.agrofundx.dto.Requests.UsersLoans;
import com.appdevteam.agrofundx.dto.Requests.getLoanDto;
import com.appdevteam.agrofundx.entity.LoanList;
import org.springframework.web.bind.annotation.RequestBody;
import com.appdevteam.agrofundx.repository.LoanListRepo;
import com.appdevteam.agrofundx.service.LoanListService;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("api/LoanList")
@CrossOrigin(origins = "http://localhost:5173/")
public class LoanListController {
    @Autowired
    LoanListService loanListService;

    @Autowired
    LoanListRepo loanListRepo;

    @GetMapping("/{id}")
    public List<UsersLoans> getUsersLoans(@PathVariable("id") int userid){
        return loanListService.getUsersLoans(userid);
    }

    @PostMapping("/post/{id}/{lid}")
    @PreAuthorize("hasAuthority('USER')")
    public LoanList setUsersLoansList(@PathVariable("id") int userid,
                                    @PathVariable("lid") int loanid,
                                    @RequestBody getLoanDto lDto) {
       
        return loanListService.setUsersLoansList(userid, loanid, lDto);
    }


    @GetMapping("/pending")
    public List<LoanList> getPendingLoanList() {
        return loanListRepo.findByStatus("Pending");
    }
    @PutMapping("/approve/{id}")
    public ResponseEntity<?> approveLoan(@PathVariable("id") int loanListId) {
        try {
            LoanList loanList = loanListRepo.findById(loanListId).orElse(null);
            if (loanList == null) {
                return new ResponseEntity<>("Loan List not found", HttpStatus.NOT_FOUND);
            }
            
            loanList.setStatus("approved");
            loanListRepo.save(loanList);
            
            return new ResponseEntity<>(loanList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to approve loan: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/reject/{id}")
    public ResponseEntity<?> rejectLoan(@PathVariable("id") int loanListId) {
        try {
            LoanList loanList = loanListRepo.findById(loanListId).orElse(null);
            if (loanList == null) {
                return new ResponseEntity<>("Loan List not found", HttpStatus.NOT_FOUND);
            }
            
            loanList.setStatus("rejected");
            loanListRepo.save(loanList);
            
            return new ResponseEntity<>(loanList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to reject loan: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/close/{id}")
    public ResponseEntity<?> closeLoan(@PathVariable("id") int loanListId) {
        try {
            LoanList loanList = loanListRepo.findById(loanListId).orElse(null);
            if (loanList == null) {
                return new ResponseEntity<>("Loan List not found", HttpStatus.NOT_FOUND);
            }
            
            loanList.setStatus("Closed");
            loanListRepo.save(loanList);
            
            return new ResponseEntity<>(loanList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to close loan: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
