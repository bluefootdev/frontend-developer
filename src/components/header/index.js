import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchIfNeeded } from '../../store/reducers/products';
import Autocomplete from './autocomplete';
import SuggestedNamesList from './suggested-names-list';
import SuggestedProductItems from './suggested-product-items';


const Header = (props) => (
  <header className="site-header">
    <Autocomplete onChange={props.searchIfNeeded} />
    {
      props.suggestedNames &&
      <SuggestedNamesList suggestedNames={props.suggestedNames} />
    }
    {
      props.suggestedProducts &&
      <SuggestedProductItems products={props.suggestedProducts} />
    }
  </header>
);

const mapStateToProps = state => {
  const {suggestedProducts} = state.product;
  return {
    suggestedNames: suggestedProducts.map(product => product.name),
    suggestedProducts: suggestedProducts.length ? suggestedProducts[0].items : []
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ searchIfNeeded }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Header);
