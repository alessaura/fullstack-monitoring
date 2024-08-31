import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard';
import DeviceDetails from './components/DeviceDetails';
import LogsViewer from './components/LogsViewer';
import AlertConfigurator from './components/AlertConfigurator';
import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const handleLogin = () => {
    window.location.href = '/';
  };

  return (
    <Router>
      <Switch>
        <Route path="/login" component={() => <Login onLogin={handleLogin} />} />
        <PrivateRoute path="/" exact component={Dashboard} />
        <PrivateRoute path="/devices/:id" component={DeviceDetails} />
        <PrivateRoute path="/devices/:id/logs" component={LogsViewer} />
        <PrivateRoute path="/alerts" component={AlertConfigurator} />
        <PrivateRoute path="/logout" component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;
