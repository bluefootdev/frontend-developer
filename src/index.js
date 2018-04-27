import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import './styles/index.css';
import { Router } from "react-router-dom";
import History from './utils/history';
import App from './components/App';
import { loadFeaturedProducts } from './actions/productActions';

const store = configureStore();

store.dispatch(loadFeaturedProducts());

render(
  <Provider store={store}>
    <Router history={History}>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
