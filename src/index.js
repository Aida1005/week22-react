import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
          <h1 className='title'>Superheroes</h1>
    <div className="container">
    <App /></div>
  </React.StrictMode>
);

