package com.hitesh.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class VerificationStartResponse {
	
	private String username;
	private String problemUrl;
	private String message;
	private int timeLimitSeconds;
}
