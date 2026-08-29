package com.hitesh.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserContestRanking {

	private int attendedContestsCount;
	private double rating;
	private int globalRanking;
	private double topPercentage;
}
