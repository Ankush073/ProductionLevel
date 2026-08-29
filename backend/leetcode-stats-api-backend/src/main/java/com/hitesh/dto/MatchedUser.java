package com.hitesh.dto;

import java.util.List;
import java.util.Map;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class MatchedUser {
	
	private String username;
	private Profile profile;
	private SubmitStat submitStats;
	private List<LanguageProblemCount> languageProblemCount;
	private List<Badge> badges;
	private String submissionCalendar;
	private Map<String, Integer> parsedCalendar;
}
