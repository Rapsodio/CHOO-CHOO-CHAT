import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import statusWeb from './statusWeb';
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

statusWeb();
