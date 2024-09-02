import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DeviceDetails = () => {
  const { id } = useParams(); // Obtém o ID do dispositivo a partir da URL
  const [device, setDevice] = useState(null);

  useEffect(() => {
    // Carrega os detalhes do dispositivo
    axios.get(`http://localhost:8080/api/devices/${id}`)
      .then(response => {
        setDevice(response.data);
      })
      .catch(error => console.error('Erro ao carregar dispositivo:', error));
  }, [id]);

  if (!device) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Detalhes do Dispositivo</h2>
      <p><strong>Nome:</strong> {device.name}</p>
      <p><strong>Status:</strong> {device.status}</p>
      <p><strong>Última Atualização:</strong> {device.lastPing}</p>
      <p><strong>Localização:</strong> {device.location}</p>
      {/* Outros detalhes do dispositivo */}
    </div>
  );
};

export default DeviceDetails;
