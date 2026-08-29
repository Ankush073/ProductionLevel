package com.hitesh.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hitesh.entity.Verification;
import java.util.Optional;

public interface VerificationRepository extends JpaRepository<Verification, Long> {
    Optional<Verification> findTopByUsernameOrderByChallengeIssuedEpochDesc(String username);
}