package com.hitesh.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class RecentSubmission {
	
	private String title;  //"Add Two Integers"
	private String titleSlug;  //leetcode.com/problems/add-two-integers/
	private String timestamp;  //hold times in seconds
	private String statusDisplay;  //Accepted", "Wrong Answer", "Runtime Error", "Time Limit Exceeded"
	private String lang;  //coding language 
}
