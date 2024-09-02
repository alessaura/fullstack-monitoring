import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DeviceForms = () => {
  const { id } = useParams(); // Obtém o id do dispositivo da URL
  const [device, setDevice] = useState({
    name: '',
    status: '',
    lastPing: '',
    location: '',
    user: { id: '' }
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Carregar os detalhes do dispositivo se o id estiver disponível
    if (id) {
      axios.get(`http://localhost:8080/api/devices/${id}`)
        .then(response => {
          setDevice(response.data);
        })
        .catch(error => console.error('Erro ao carregar dispositivo:', error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDevice(prevDevice => ({
      ...prevDevice,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const method = id ? 'put' : 'post';
    const url = id ? `http://localhost:8080/api/devices/${id}` : 'http://localhost:8080/api/devices';
    
    axios[method](url, device)
      .then(() => navigate('/dashboard'))
      .catch(error => console.error('Erro ao salvar dispositivo:', error));
  };

  const handleClose = () => {
    navigate('/dashboard');
  };

  return (
    <div className="device-form-container">
      <h2>{id ? 'Edit Device' : 'Create Device'}</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={device.name} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <input type="text" id="status" name="status" value={device.status} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="lastPing">Last Ping:</label>
          <input type="datetime-local" id="lastPing" name="lastPing" value={device.lastPing} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" value={device.location} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="userId">User ID:</label>
          <input type="text" id="userId" name="user.id" value={device.user.id} onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Save Device</button>
        <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
      </form>
    </div>
  );
};

export default DeviceForms;
