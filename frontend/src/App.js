// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DeviceDetails from './pages/DeviceDetails';
import Login from './pages/Login'; // Se você tiver uma página de login

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/devices/:id" element={<DeviceDetails />} />
      <Route path="/login" element={<Login />} /> {/* Se você tiver uma página de login */}
    </Routes>
  );
};

export default App;
