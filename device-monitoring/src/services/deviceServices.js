import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // URL base da API

export const getDevices = async () => {
    return await axios.get(`${API_URL}/devices`);
};

export const getDeviceById = async (id) => {
    return await axios.get(`${API_URL}/devices/${id}`);
};

export const createDevice = async (device) => {
    return await axios.post(`${API_URL}/devices`, device);
};

export const updateDevice = async (id, device) => {
    return await axios.put(`${API_URL}/devices/${id}`, device);
};

export const deleteDevice = async (id) => {
    return await axios.delete(`${API_URL}/devices/${id}`);
};

export const getDeviceLogs = async (id) => {
    return await axios.get(`${API_URL}/devices/${id}/logs`);
};
