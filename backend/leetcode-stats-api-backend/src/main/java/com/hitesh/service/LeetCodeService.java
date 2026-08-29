package com.hitesh.service;

import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.hitesh.dto.GraphQLRequest;
import com.hitesh.dto.LeetCodeResponse;
import com.hitesh.dto.RecentSubmissionResponse;
import com.hitesh.exception.UserNotFoundException;

import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.ObjectMapper;

@Service
public class LeetCodeService {
	
	private static final String LEETCODE_URL = "https://leetcode.com/graphql/";
	
	private final RestTemplate restTemplate;
	
	LeetCodeService(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}
	
	public RecentSubmissionResponse getRecentSubmissions(String username, int limit) {
		String query = "query getRecentSubmissions($username: String!, $limit: Int!) { recentSubmissionList(username: $username, limit: $limit) { title titleSlug timestamp statusDisplay lang } }";

	    Map<String, Object> variables = Map.of("username", username, "limit", limit);
	    GraphQLRequest requestBody = new GraphQLRequest(query, variables);
	    
	    HttpHeaders headers = new HttpHeaders();
	    headers.setContentType(MediaType.APPLICATION_JSON);
	    headers.set("Referer", "https://leetcode.com/" + username + "/");
	    
	    HttpEntity<GraphQLRequest> requestEntity = new HttpEntity<>(requestBody, headers);
	    return restTemplate.postForObject(LEETCODE_URL, requestEntity, RecentSubmissionResponse.class);
	}
	
	
	public LeetCodeResponse getUserStats(String username) {
		
		// Step 1: build the GraphQL query string
		String query = "query getUserProfile($username: String!) { matchedUser(username: $username) { username profile { ranking reputation } submitStats: submitStatsGlobal { acSubmissionNum { difficulty count } } languageProblemCount { languageName problemsSolved } badges { displayName } submissionCalendar } userContestRanking(username: $username) { attendedContestsCount rating globalRanking topPercentage } }";
		Map<String,Object> variables = Map.of("username",username);		
		GraphQLRequest requestBody = new GraphQLRequest(query,variables);
		
		//now the header as we have done in the PostMan
		HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Referer", "https://leetcode.com/" + username + "/");
        
        // Step: bundle body + headers together
        HttpEntity<GraphQLRequest> requestEntity = new HttpEntity<>(requestBody,headers);
        LeetCodeResponse response = restTemplate.postForObject(LEETCODE_URL, requestEntity, LeetCodeResponse.class);
        
        if(response == null || response.getData() == null || response.getData().getMatchedUser() == null) {
        		throw new UserNotFoundException("LeetCode user not found: " + username);
        }
        
        String calendarJson = response.getData().getMatchedUser().getSubmissionCalendar();

        if (calendarJson != null) {
            try {
                ObjectMapper mapper = new ObjectMapper();
                Map<String, Integer> calendarMap = mapper.readValue(calendarJson, new TypeReference<Map<String, Integer>>() {});
                response.getData().getMatchedUser().setParsedCalendar(calendarMap);
            } catch (tools.jackson.core.JacksonException e) {
                System.out.println("Failed to parse submission calendar: " + e.getMessage());
            }
        }
        
        return response;
	}
}
