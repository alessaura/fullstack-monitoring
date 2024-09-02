import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/devices">Dispositivos</Link></li>
        <li><Link to="/logs">Logs</Link></li>
        <li><Link to="/alerts">Alertas</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
