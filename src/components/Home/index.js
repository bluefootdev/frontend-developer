import React, { Component } from 'react';
import Loadable from "react-loadable";
import Loading from "../Shared/Loading";

export const Featured = Loadable({ loader: () => import("./Featured"), loading: Loading, });

class App extends Component {
  render() {
    return (
      <div>
        <Featured />
      </div>
    );
  }
}

export default App;
