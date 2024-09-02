// src/services/userService.js
import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/api/users';

export const registerUser = async (email, password) => {
  try {
    const response = await axios.post(`${USER_API_BASE_URL}/register`, {
      email,
      passwordHash: password
    });
    console.log('Usuário registrado com sucesso:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${USER_API_BASE_URL}/login`, {
      email,
      passwordHash: password
    });
    console.log('Login bem-sucedido:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};
