package com.hitesh.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hitesh.dto.LeetCodeResponse;
import com.hitesh.service.LeetCodeService;

@RestController
@RequestMapping("/api/leetcode/")
@CrossOrigin("*")
public class LeetCodeController {
	
	private final LeetCodeService service;
	
	LeetCodeController(LeetCodeService service) {
		this.service = service;
	}
	
	@GetMapping("/{username}")
	public LeetCodeResponse fetchingDetail(@PathVariable String username) {
		return service.getUserStats(username);
	}
}
