import React, { useEffect, useState } from 'react';
import { getDevices } from '../services/deviceService';
import DeviceList from './DeviceList';

const Dashboard = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      const response = await getDevices();
      setDevices(response.data);
    };
    fetchDevices();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <DeviceList devices={devices} />
    </div>
  );
};

export default Dashboard;
