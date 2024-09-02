package com.ale.braxxy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ale.braxxy.model.Device;
import com.ale.braxxy.model.Log;
import com.ale.braxxy.model.User;
import com.ale.braxxy.service.DeviceService;
import com.ale.braxxy.service.UserService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/devices")
public class DeviceController {

    @Autowired
    private DeviceService deviceService;

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<Device>> getAllDevices() {
        List<Device> devices = deviceService.getAllDevices();
        return new ResponseEntity<>(devices, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Device> getDeviceById(@PathVariable("id") UUID id) {
        Device device = deviceService.getDeviceById(id);
        if (device != null) {
            return ResponseEntity.ok(device);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Device> createDevice(@RequestBody Device device) {
        if (device.getUser() != null && device.getUser().getId() != null) {
            Optional<User> optionalUser = userService.findById(device.getUser().getId());
            if (optionalUser.isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
            device.setUser(optionalUser.get());
        }
        
        Device createdDevice = deviceService.createDevice(device);
        return new ResponseEntity<>(createdDevice, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Device> updateDevice(@PathVariable("id") UUID id, @RequestBody Device device) {
        return deviceService.updateDevice(id, device)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDevice(@PathVariable("id") UUID id) {
        boolean deleted = deviceService.deleteDevice(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }

    @GetMapping("/{id}/logs")
    public ResponseEntity<List<Log>> getDeviceLogs(@PathVariable("id") UUID id) {
        List<Log> logs = deviceService.getDeviceLogs(id);
        if (logs != null && !logs.isEmpty()) {
            return ResponseEntity.ok(logs);
        } else {
            return ResponseEntity.noContent().build();
        }
    }
}
