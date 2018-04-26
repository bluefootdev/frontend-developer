import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loadable from "react-loadable";
import Loading from "../Shared/Loading";

export const Featured = Loadable({ loader: () => import("./Featured"), loading: Loading, });

class App extends Component {
  render() {
    const products = this.props.products;
    return (
      <div>
        <Featured products={products.featured} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps)(App);
