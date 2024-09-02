// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeviceForm from '../components/DeviceForm'; // Importe o DeviceForm
import './Dashboard.css'; // Importando o CSS

const Dashboard = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false); // Estado para controlar a exibição do formulário
  const [editDeviceId, setEditDeviceId] = useState(null); // Estado para o ID do dispositivo a ser editado

  useEffect(() => {
    // Função para buscar os dispositivos
    const fetchDevices = async () => {
      try {
        const response = await axios.get('/api/devices');
        setDevices(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching devices:', error);
        setLoading(false);
      }
    };

    fetchDevices();
  }, []);

  const handleCreate = () => {
    setEditDeviceId(null); // Defina como null para criar um novo dispositivo
    setShowForm(true); // Exiba o formulário
  };

  const handleEdit = (id) => {
    setEditDeviceId(id); // Defina o ID do dispositivo a ser editado
    setShowForm(true); // Exiba o formulário
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/devices/${id}`);
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
      <button className="btn btn-primary btn-custom" onClick={handleCreate}>Create New Device</button>
      {showForm && (
        <DeviceForm 
          deviceId={editDeviceId} 
          onClose={() => setShowForm(false)} // Função para fechar o formulário
          onSave={() => {
            setShowForm(false);
            // Recarregar a lista de dispositivos após criação ou edição
            const fetchDevices = async () => {
              try {
                const response = await axios.get('/api/devices');
                setDevices(response.data);
              } catch (error) {
                console.error('Error fetching devices:', error);
              }
            };
            fetchDevices();
          }}
        />
      )}
      <ul>
        {devices.map(device => (
          <li key={device.id}>
            <Link to={`/devices/${device.id}`}>{device.name}</Link>
            <button className="btn btn-danger btn-delete" onClick={() => handleEdit(device.id)}>Edit</button>
            <button className="btn btn-danger btn-delete" onClick={() => handleDelete(device.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
