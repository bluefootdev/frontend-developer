import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchIfNeeded } from '../../store/reducers/products';
import Autocomplete from './autocomplete';
import SuggestContainer from './suggest-container';

import './index.css';


const Header = (props) => (
  <header className="site-header">
    <Autocomplete onChange={props.searchIfNeeded} text={props.searchText} />
    {
      props.showSuggestions &&
      <SuggestContainer {...props} />
    }
  </header>
);

const mapStateToProps = state => {
  const {suggestedProducts, searchText} = state.product;
  const suggestedNames = suggestedProducts.map(product => product.name);

  return {
    suggestedNames,
    suggestedProducts: suggestedProducts.length ? suggestedProducts[0].items : [],
    searchText,
    showSuggestions: !!suggestedNames.length || !!suggestedProducts.length
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ searchIfNeeded }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Header);
