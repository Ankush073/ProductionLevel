package com.hitesh.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VerificationStatusResponse {

	private boolean verified;
	private boolean expired;
	private String message;
}
