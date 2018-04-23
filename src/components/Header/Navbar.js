import React, { Component } from 'react';
import '../../styles/navbar.css'
import Loading from '../Shared/Loading';
import Loadable from 'react-loadable';

export const Search = Loadable({ loader: () => import("./Search"), loading: Loading, });

export class Navbar extends Component {
  render() {
    return (
      <div className={'header-navbar'}>
        <div className={'container'}>
          <div className={'row d-flex align-items-center'}>
            <div className={'col-md-3 col-sm-12'}>
              Awesome Logo
            </div>
            <div className={'col-md-6 col-sm-12'}>
              <Search />
            </div>
            <div className={'col-md-3 right d-none d-md-block'}>
              <div className={'col'}>
                <i className={'fas fa-shopping-cart'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;