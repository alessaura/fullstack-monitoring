package com.ale.braxxy.service;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ale.braxxy.model.Device;
import com.ale.braxxy.repository.DeviceRepository;

@Service
public class DeviceService {

    @Autowired
    private DeviceRepository deviceRepository;

    // Listar todos os dispositivos
    public List<Device> getAllDevices() {
        return deviceRepository.findAll();
    }

    // Buscar um dispositivo por ID
    public Optional<Device> getDeviceById(UUID id) {
        return deviceRepository.findById(id);
    }

    // Adicionar um novo dispositivo
    public Device addDevice(Device device) {
        return deviceRepository.save(device);
    }

    // Atualizar um dispositivo existente
    public Device updateDevice(UUID id, Device updatedDevice) {
        Optional<Device> deviceOpt = deviceRepository.findById(id);
        if (deviceOpt.isPresent()) {
            Device device = deviceOpt.get();
            device.setStatus(updatedDevice.getStatus());
            device.setLastPing(updatedDevice.getLastPing());
            device.setLocation(updatedDevice.getLocation());
            device.setLogs(updatedDevice.getLogs());
            return deviceRepository.save(device);
        } else {
            throw new RuntimeException("Dispositivo não encontrado");
        }
    }

    // Remover um dispositivo
    public void deleteDevice(UUID id) {
        deviceRepository.deleteById(id);
    }
}
