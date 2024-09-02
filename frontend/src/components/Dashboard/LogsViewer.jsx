import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LogsViewer = ({ deviceId }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/devices/${deviceId}/logs`)
      .then(response => {
        setLogs(response.data);
      })
      .catch(error => console.error('Erro ao carregar logs:', error));
  }, [deviceId]);

  return (
    <div>
      <h2>Logs do Dispositivo</h2>
      <ul>
        {logs.map(log => (
          <li key={log.id}>{log.message} - {log.timestamp}</li>
        ))}
      </ul>
    </div>
  );
};

export default LogsViewer;
