// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import DeviceForm from '../components/DeviceForm';

const Dashboard = () => {
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);

  const handleEditDevice = (id) => {
    setSelectedDeviceId(id);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => handleEditDevice(null)}>Add New Device</button>
      {/* Renderizar lista de dispositivos, gráficos, etc. */}
      {selectedDeviceId && <DeviceForm deviceId={selectedDeviceId} />}
    </div>
  );
};

export default Dashboard;
