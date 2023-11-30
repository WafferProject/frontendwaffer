import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "leaflet/dist/leaflet.css";
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import ParentHome from './ParentHome';
import ConsumerDashboard from './pages/ConsumerDashboard';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
