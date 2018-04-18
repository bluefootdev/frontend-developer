import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import store from '../../store';
import Header from '../header';
import ProductsList from '../products-list';


const App = props => (
  <Provider store={store}>
    <Fragment>
      <Header />
      <ProductsList />
    </Fragment>
  </Provider>
);

export default App;
