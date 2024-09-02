package com.ale.braxxy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ale.braxxy.model.Log;
import java.util.List;
import java.util.UUID;

public interface LogRepository extends JpaRepository<Log, Long> {
    List<Log> findByDeviceId(UUID deviceId);
}
