import { global } from '@/styles/global';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/font.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {global}
    <App />
  </React.StrictMode>
);
