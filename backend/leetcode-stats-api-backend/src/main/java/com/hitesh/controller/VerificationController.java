package com.hitesh.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hitesh.dto.VerificationStartResponse;
import com.hitesh.dto.VerificationStatusResponse;
import com.hitesh.service.VerificationService;

@RestController
@RequestMapping("/api/verify")
@CrossOrigin(origins = "http://localhost:3000")
public class VerificationController {

    private final VerificationService verificationService;

    VerificationController(VerificationService verificationService) {
        this.verificationService = verificationService;
    }

    @PostMapping("/start/{username}")
    public VerificationStartResponse start(@PathVariable String username) {
        return verificationService.startVerification(username);
    }

    @GetMapping("/status/{username}")
    public VerificationStatusResponse status(@PathVariable String username) {
        return verificationService.checkstatus(username);
    }
}