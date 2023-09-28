import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Cambia de ReactDOM.render a createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
