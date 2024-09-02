// src/components/Dashboard/DeviceForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Certifique-se de importar axios
import { createDevice, updateDevice } from '../../services/deviceService'; // Importa createDevice e updateDevice

const DeviceForm = ({ deviceId, onClose, onSave }) => {
  const [device, setDevice] = useState({
    name: '',
    status: '',
    lastPing: '',
    location: '',
    user: { id: '' }
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (deviceId) {
      // Fetch device data if deviceId is provided
      axios.get(`http://localhost:3000/api/devices/${deviceId}`)
        .then(response => {
          setDevice(response.data);
        })
        .catch(error => console.error('Erro ao carregar dispositivo:', error));
    }
  }, [deviceId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDevice(prevDevice => ({
      ...prevDevice,
      [name]: value
    }));
  };

  const handleStatusChange = (e) => {
    setDevice(prevDevice => ({
      ...prevDevice,
      status: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (deviceId) {
        // Update existing device
        await updateDevice(deviceId, device);
      } else {
        // Create new device
        await createDevice(device);
      }
      onSave(); // Callback to refresh the device list
      onClose(); // Close the form
    } catch (error) {
      console.error('Erro ao salvar dispositivo:', error);
      setMessage('Erro ao salvar dispositivo. Verifique o console para detalhes.');
    }
  };

  return (
    <div className="device-form-container">
      <h2>{deviceId ? 'Editar Dispositivo' : 'Criar Dispositivo'}</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="name">Nome do dispositivo:</label>
          <input type="text" id="name" name="name" value={device.name} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="status" value="INACTIVE" checked={device.status === 'INACTIVE'} onChange={handleStatusChange} />
              INACTIVE
            </label>
            <label>
              <input type="radio" name="status" value="ACTIVE" checked={device.status === 'ACTIVE'} onChange={handleStatusChange} />
              ACTIVE
            </label>
            <label>
              <input type="radio" name="status" value="FAILED" checked={device.status === 'FAILED'} onChange={handleStatusChange} />
              FAILED
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="lastPing">Última atualização em:</label>
          <input type="datetime-local" id="lastPing" name="lastPing" value={device.lastPing} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Localização:</label>
          <input type="text" id="location" name="location" value={device.location} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="userId">User ID:</label>
          <input type="text" id="userId" name="user.id" value={device.user.id} readOnly className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Salvar Dispositivo</button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default DeviceForm;
