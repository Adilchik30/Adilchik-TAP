// src/index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CoinsProvider } from './contexts/CoinsContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <CoinsProvider>
    <App />
  </CoinsProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
