package com.ale.braxxy.model;
import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Device {

    public Device(UUID id, String name, DeviceStatus status, LocalDateTime lastPing, String location) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.lastPing = lastPing;
        this.location = location;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String name;

    @Enumerated(EnumType.STRING)
    private DeviceStatus status;

    private LocalDateTime lastPing;

    private String location;

    @Lob
    private String logs;

    // Getters e Setters
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public DeviceStatus getStatus() {
        return status;
    }

    public void setStatus(DeviceStatus status) {
        this.status = status;
    }

    public LocalDateTime getLastPing() {
        return lastPing;
    }

    public void setLastPing(LocalDateTime lastPing) {
        this.lastPing = lastPing;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getLogs() {
        return logs;
    }

    public void setLogs(String logs) {
        this.logs = logs;
    }
}
