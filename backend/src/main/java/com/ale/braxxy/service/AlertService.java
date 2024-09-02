package com.ale.braxxy.service;

import com.ale.braxxy.model.Alert;
import com.ale.braxxy.repository.AlertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class AlertService {

    @Autowired
    private AlertRepository alertRepository;


    public List<Alert> getAllAlerts() {
        return alertRepository.findAll();
    }


    public Optional<Alert> getAlertById(Long id) {
        return alertRepository.findById(id);
    }


    public List<Alert> getAlertsByDeviceId(UUID deviceId) {
        return alertRepository.findByDeviceId(deviceId);
    }

 
    public Alert createAlert(Alert alert) {
        return alertRepository.save(alert);
    }

  
    public Optional<Alert> updateAlert(Long id, Alert alertDetails) {
        if (alertRepository.existsById(id)) {
            alertDetails.setId(id);
            return Optional.of(alertRepository.save(alertDetails));
        } else {
            return Optional.empty();
        }
    }


    public boolean deleteAlert(Long id) {
        if (alertRepository.existsById(id)) {
            alertRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
