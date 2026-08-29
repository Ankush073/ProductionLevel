package com.hitesh.dto;

import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class GraphQLRequest {
	
	private String query;
	private Map<String,Object> variables;
}
