import React, { Component } from 'react';
import Navbar from './Header/Navbar';
import Featured from './Home/Featured';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>

        <Featured/>

      </div>
    );
  }
}

export default App;
