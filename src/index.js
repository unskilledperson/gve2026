import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  // If there's pre-rendered content (from react-snap), hydrate it
  const { hydrateRoot } = require('react-dom/client');
  hydrateRoot(rootElement, <App />);
} else {
  // Otherwise, render normally
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}


