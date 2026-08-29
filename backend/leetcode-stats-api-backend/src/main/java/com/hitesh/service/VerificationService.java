package com.hitesh.service;

import java.time.Instant;
import java.util.List;

import org.springframework.stereotype.Service;

import com.hitesh.dto.RecentSubmission;
import com.hitesh.dto.RecentSubmissionResponse;
import com.hitesh.dto.VerificationStartResponse;
import com.hitesh.dto.VerificationStatusResponse;
import com.hitesh.entity.Verification;
import com.hitesh.repository.VerificationRepository;

@Service
public class VerificationService {

    private static final String TARGET_SLUG = "add-two-integers";
    private static final int TIME_LIMIT_SECONDS = 120;

    private final VerificationRepository repo;
    private final LeetCodeService service;

    public VerificationService(VerificationRepository repo, LeetCodeService service) {
        this.repo = repo;
        this.service = service;
    }

    public VerificationStartResponse startVerification(String username) {
        Verification verification = new Verification();
        verification.setUsername(username);
        verification.setProblemSlug(TARGET_SLUG);
        verification.setChallengeIssuedEpoch(Instant.now().getEpochSecond()); 
        verification.setVerified(false);

        repo.save(verification);

        return new VerificationStartResponse(
                username,
                "https://leetcode.com/problems/" + TARGET_SLUG + "/",
                "Please submit any attempt to this problem within the time limit to verify your handle.",
                TIME_LIMIT_SECONDS
        );
    }

    public VerificationStatusResponse checkstatus(String username) {
        Verification verification = repo
                .findTopByUsernameOrderByChallengeIssuedEpochDesc(username)
                .orElseThrow(() -> new RuntimeException("No verification challenge found for " + username));

        if (verification.isVerified()) {
            return new VerificationStatusResponse(true, false, "Already Verified");
        }

        long nowEpoch = Instant.now().getEpochSecond();
        long secondsElapsed = nowEpoch - verification.getChallengeIssuedEpoch();

        if (secondsElapsed > TIME_LIMIT_SECONDS) {
            return new VerificationStatusResponse(false, true, "Time limit expired. Please try again.");
        }

        RecentSubmissionResponse response = service.getRecentSubmissions(username, 10);
        List<RecentSubmission> submissions = response.getData().getRecentSubmissionList();

        long challengeIssuedEpochSeconds = verification.getChallengeIssuedEpoch();

        boolean found = submissions.stream().anyMatch(s ->
                s.getTitleSlug().equals(TARGET_SLUG) &&
                Long.parseLong(s.getTimestamp()) >= challengeIssuedEpochSeconds
        );

        if (found) {
            verification.setVerified(true);
            verification.setVerifiedAtEpoch(Instant.now().getEpochSecond());
            repo.save(verification);
            return new VerificationStatusResponse(true, false, "Verified successfully!");
        }

        return new VerificationStatusResponse(false, false, "Waiting for submission...");
    }
}