import React, { useState } from 'react';
import { loginUser } from '../services/userService';
import { Link } from 'react-router-dom';
import './LoginPage.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await loginUser(email, password);
      setMessage('Login bem-sucedido!');
    } catch (error) {
      setMessage('Erro ao fazer login.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Login</button>
        <p>Não tem uma conta?</p>
      <Link to="/register">
        <button>Cadastrar</button>
      </Link>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Login;
