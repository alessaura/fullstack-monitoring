// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    axios.get('/devices')
      .then(response => setDevices(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Device Dashboard BRAXXY </h1>
      <ul>
        {devices.map(device => (
          <li key={device.id}>
            <Link to={`/devices/${device.id}`}>{device.name}</Link>
            <button onClick={() => handleDelete(device.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleCreate()}>Create New Device</button>
    </div>
  );

  function handleCreate() {
    // Implement device creation logic here
  }

  function handleDelete(id) {
    axios.delete(`/devices/${id}`)
      .then(() => setDevices(devices.filter(device => device.id !== id)))
      .catch(error => console.error(error));
  }
};

// Adicione um botão para logout
<button onClick={() => {
  localStorage.removeItem('token');
  window.location.href = '/login';
}}>Logout</button>


export default Dashboard;
