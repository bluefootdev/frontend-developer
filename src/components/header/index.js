import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchIfNeeded } from '../../store/reducers/products';
import Autocomplete from './autocomplete';
import SuggestedNamesList from './suggested-names-list';


const Header = (props) => (
  <header className="site-header">
    <Autocomplete onChange={props.searchIfNeeded} />
    {
      props.suggestedNames &&
      <SuggestedNamesList suggestedNames={props.suggestedNames} />
    }
  </header>
);

const mapStateToProps = state => {
  const {suggestedProducts} = state.product;
  return {
    suggestedNames: suggestedProducts.map(product => product.name),
    suggestedProducts
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ searchIfNeeded }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Header);
