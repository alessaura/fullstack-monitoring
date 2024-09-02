import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('user'); // Remove as informações do usuário do localStorage
    navigate('/login'); // Redireciona para a página de login
  }, [navigate]);

  return null;
};

export default Logout;
