package com.ale.braxxy.repository;

import com.ale.braxxy.model.Alert;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface AlertRepository extends JpaRepository<Alert, Long> {
    List<Alert> findByDeviceId(UUID deviceId);
}
