import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DeviceCard from './DeviceCard';

const DeviceList = () => {
  const [devices, setDevices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/devices')
      .then(response => {
        setDevices(response.data);
      })
      .catch(error => console.error('Erro ao carregar dispositivos:', error));
  }, []);

  const handleDeviceClick = (id) => {
    navigate(`/devices/${id}`);
  };

  return (
    <div>
      <h2>Lista de Dispositivos</h2>
      <div>
        {devices.map(device => (
          <DeviceCard key={device.id} device={device} onClick={() => handleDeviceClick(device.id)} />
        ))}
      </div>
    </div>
  );
};

export default DeviceList;
