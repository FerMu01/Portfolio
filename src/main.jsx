import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/sections.css';
import './styles/responsive.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
