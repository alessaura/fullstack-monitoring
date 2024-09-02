import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage'; 
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="app-content">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} /> 
            <Route path="/dashboard" element={<DashboardPage />} /> 
          </Routes>
        </div>
    </div>
  );
};

export default App;
