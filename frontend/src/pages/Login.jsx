// src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Importando o CSS

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('/login', { username, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/';
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
