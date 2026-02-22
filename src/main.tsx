import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* CSS modules — order matters: tokens → reset → components → nav → animations → responsive → tailwind */
import './styles/variables.css';
import './styles/base.css';
import './styles/components.css';
import './styles/navigation.css';
import './styles/animations.css';
import './styles/responsive.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
