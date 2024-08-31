// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Importando o CSS

const Dashboard = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para buscar os dispositivos
    const fetchDevices = async () => {
      try {
        const response = await axios.get('/devices');
        setDevices(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching devices:', error);
        setLoading(false);
      }
    };

    fetchDevices();
  }, []);

  const handleCreate = async () => {
    // Exemplo de criação de um novo dispositivo
    const newDevice = { name: 'New Device', description: 'Description of the new device' };
    try {
      await axios.post('/devices', newDevice);
      // Recarregar a lista de dispositivos após criação
      const response = await axios.get('/devices');
      setDevices(response.data);
    } catch (error) {
      console.error('Error creating device:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/devices/${id}`);
      // Remover o dispositivo da lista após deleção
      setDevices(devices.filter(device => device.id !== id));
    } catch (error) {
      console.error('Error deleting device:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <h1>Device Dashboard BRAXXY</h1>
      <button onClick={handleCreate}>Create New Device</button>
      <ul>
        {devices.map(device => (
          <li key={device.id}>
            <Link to={`/devices/${device.id}`}>{device.name}</Link>
            <button onClick={() => handleDelete(device.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
