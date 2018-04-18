import React from 'react';
import {Provider} from 'react-redux';

import store from '../../store';
import Header from '../header';


const App = props => (
  <Provider store={store}>
    <Header />
    <ProductsList />
  </Provider>
);

export default App;
