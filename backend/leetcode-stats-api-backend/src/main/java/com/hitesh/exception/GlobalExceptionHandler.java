package com.hitesh.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.hitesh.dto.ErrorResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(UserNotFoundException.class)
	public ResponseEntity<ErrorResponse> handleUserNotFound(UserNotFoundException ex) {
		//set the status code with the exception message from the UseNotFoundException class
		//		HttpStatus.OK
		//		HttpStatus.CREATED
		//		HttpStatus.BAD_REQUEST
		//		HttpStatus.UNAUTHORIZED
		//		HttpStatus.FORBIDDEN
		//		HttpStatus.NOT_FOUND
		//		HttpStatus.INTERNAL_SERVER_ERROR
		ErrorResponse error = new ErrorResponse(HttpStatus.NOT_FOUND.value(), ex.getMessage());
		return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
	}
}
