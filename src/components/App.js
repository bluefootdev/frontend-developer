import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import * as Routes from './routes';
import Loading from './Shared/Loading';
import Loadable from 'react-loadable';

export const Navbar = Loadable({ loader: () => import("./Header/Navbar"), loading: Loading, });

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>

        <Switch>
          <Route exact path='/' component={Routes.Home}/>
          <Route path='/product/:showId/:slug' component={Routes.ProductDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;
