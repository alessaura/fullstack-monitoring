package com.ale.braxxy.service;

import com.ale.braxxy.model.Device;
import com.ale.braxxy.model.Log;
import com.ale.braxxy.repository.DeviceRepository;
import com.ale.braxxy.repository.LogRepository;
import com.ale.braxxy.exception.ResourceNotFoundException; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class DeviceService {

    @Autowired
    private DeviceRepository deviceRepository;

    @Autowired
    private LogRepository logRepository;

    public List<Device> getAllDevices() {
        return deviceRepository.findAll();
    }

    public Device getDeviceById(UUID id) {
        return deviceRepository.findById(id).orElse(null);
    }

    public Device createDevice(Device device) {
        if (device == null) {
            throw new IllegalArgumentException("Device cannot be null");
        }
        return deviceRepository.save(device);
    }

    public Optional<Device> updateDevice(UUID id, Device device) {
        return deviceRepository.findById(id)
                .map(existingDevice -> {
                    existingDevice.setName(device.getName());
                    existingDevice.setStatus(device.getStatus());
                    existingDevice.setLastPing(device.getLastPing());
                    existingDevice.setLocation(device.getLocation());
                    return deviceRepository.save(existingDevice);
                });
    }

    public boolean deleteDevice(UUID id) {
        if (deviceRepository.existsById(id)) {
            deviceRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<Log> getDeviceLogs(UUID id) {
        return logRepository.findByDeviceId(id);
    }
}
