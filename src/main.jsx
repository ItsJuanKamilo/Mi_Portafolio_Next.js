import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom'; // Importa HashRouter
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> {/* Envuelve tu aplicación con HashRouter */}
      <App />
    </Router>
  </StrictMode>,
);
