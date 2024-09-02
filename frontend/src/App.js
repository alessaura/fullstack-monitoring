import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DeviceDetails from './pages/DeviceDetails';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/device-details/:id" element={<DeviceDetails />} />
    </Routes>
  );
};

export default App;
