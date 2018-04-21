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
          <div className={'row'}>
            <div className={'col-3'}>
              Awesome Logo
            </div>
            <div className={'col-9'}>
              <Search />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;