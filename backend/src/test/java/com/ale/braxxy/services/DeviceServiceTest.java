import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.when;
import org.springframework.boot.test.context.SpringBootTest;

import com.ale.braxxy.model.Device;
import com.ale.braxxy.model.DeviceStatus;
import com.ale.braxxy.repository.DeviceRepository;
import com.ale.braxxy.service.DeviceService;

@SpringBootTest
public class DeviceServiceTest {

    @Mock
    private DeviceRepository deviceRepository;

    @InjectMocks
    private DeviceService deviceService;

    @Test
    public void testFindDeviceById() {
        Device device = new Device(UUID.randomUUID(), "Device 1", DeviceStatus.ACTIVE, LocalDateTime.now(), "Location 1");
        when(deviceRepository.findById(device.getId())).thenReturn(Optional.of(device));
    
        Optional<Device> foundDeviceOptional = deviceService.getDeviceById(device.getId());
        Device foundDevice = foundDeviceOptional.get(); // unwrap the Optional
    
    }
}
