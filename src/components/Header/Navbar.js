import React, { Component } from 'react';
import Search from './Search';
import '../../styles/navbar.css'

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