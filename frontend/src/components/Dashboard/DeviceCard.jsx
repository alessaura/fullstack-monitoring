import React from 'react';

const DeviceCard = ({ device, onClick }) => {
  return (
    <div onClick={onClick}>
      <h3>{device.name}</h3>
      <p>Status: {device.status}</p>
      <p>Última atualização em: {device.lastPing}</p>
    </div>
  );
};

export default DeviceCard;
