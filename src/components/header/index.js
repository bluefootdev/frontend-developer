import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchIfNeeded } from '../../store/reducers/products';
import Autocomplete from './autocomplete';
import SuggestedContainer from './suggested-container';

import './index.css';


const Header = (props) => (
  <header className="site-header">
    <Autocomplete onChange={props.searchIfNeeded} text={props.searchText} />
    {
      props.showSuggestions &&
      <SuggestedContainer {...props} />
    }
  </header>
);

const mapStateToProps = state => {
  const {suggestedProducts, searchText, showSuggestions} = state.product;
  const suggestedNames = suggestedProducts.map(product => product.name);

  return {
    suggestedNames,
    suggestedProducts: suggestedProducts.length ? suggestedProducts[0].items : [],
    searchText,
    showSuggestions
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ searchIfNeeded }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Header);
