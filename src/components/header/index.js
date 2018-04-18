import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchIfNeeded } from '../../store/reducers/products';
import Autocomplete from './autocomplete';


const Header = ({products, searchIfNeeded}) => (
  <header className="site-header">
    <Autocomplete onChange={searchIfNeeded} />
  </header>
);

const mapStateToProps = state => ({products: state.product.products})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ searchIfNeeded }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Header);
