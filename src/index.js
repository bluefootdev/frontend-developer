import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Router } from "react-router-dom";
import History from './utils/history';
import App from './components/App';

ReactDOM.render(
  <Router history={History}>
    <App />
  </Router>
  , document.getElementById('root'));