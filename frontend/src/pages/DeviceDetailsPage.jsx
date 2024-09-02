// src/pages/DeviceDetails.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DeviceDetails = () => {
  const { id } = useParams();
  const [device, setDevice] = useState(null);

  useEffect(() => {
    axios.get(`/devices/${id}`)
      .then(response => setDevice(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!device) return <div>Loading...</div>;

  return (
    <div>
      <h1>{device.name}</h1>
      <p>{device.description}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default DeviceDetails;
