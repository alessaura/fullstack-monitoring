package com.ale.braxxy.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ale.braxxy.model.Device;

public interface DeviceRepository extends JpaRepository<Device, UUID> {
}

