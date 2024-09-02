// src/services/deviceService.js
import axios from 'axios';

const DEVICE_API_BASE_URL = 'http://localhost:8080/api/devices';

export const createDevice = async (device) => {
  try {
    const response = await axios.post(DEVICE_API_BASE_URL, device);
    console.log('Dispositivo criado com sucesso:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar dispositivo:', error.message);
    throw error;
  }
};




export const updateDevice = async (deviceId, device) => {
  try {
    const response = await axios.put(`${DEVICE_API_BASE_URL}/${deviceId}`, device);
    console.log('Dispositivo atualizado com sucesso:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar dispositivo:', error.message);
    throw error;
  }
};
