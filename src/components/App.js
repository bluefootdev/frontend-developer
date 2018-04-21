import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import * as Routes from './routes';
import Navbar from './Header/Navbar';
import Featured from './Home/Featured';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>

        <Switch>
          <Route exact path='/' component={Routes.ShowList}/>
          <Route exact path='/shows' component={Routes.ShowList}/>
          <Route path='/shows/add' component={Routes.ShowAdd}/>
          <Route path='/shows/:showId/edit' component={Routes.ShowEdit}/>
          <Route path='/shows/:showId' component={Routes.ShowInfo}/>
        </Switch>
      </div>
    );
  }
}

export default App;
