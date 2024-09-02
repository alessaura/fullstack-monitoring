import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Minha Dashboard</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/devices">Dispositivos</Link>
        <Link to="/logs">Logs</Link>
        <Link to="/alerts">Alertas</Link>
        <Link to="/Logout">Sair</Link>
      </nav>
    </header>
  );
};

export default Header;
