import React, { useState } from 'react';
import axios from 'axios';
import './AlertsConfig.css';

const AlertsConfig = ({ deviceId }) => {
  const [alertConfig, setAlertConfig] = useState({
    threshold: '',
    enabled: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAlertConfig(prevConfig => ({
      ...prevConfig,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/api/devices/${deviceId}/alerts`, alertConfig)
      .then(() => alert('Alerta configurado com sucesso!'))
      .catch(error => console.error('Erro ao configurar alerta:', error));
  };

  return (
    <div>
      <h2>Configurar Alertas</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="threshold">Threshold:</label>
          <input type="number" id="threshold" name="threshold" value={alertConfig.threshold} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="enabled">Ativar Alerta:</label>
          <input type="checkbox" id="enabled" name="enabled" checked={alertConfig.enabled} onChange={handleChange} />
        </div>
        <button type="submit">Salvar Configuração</button>
      </form>
    </div>
  );
};

export default AlertsConfig;
