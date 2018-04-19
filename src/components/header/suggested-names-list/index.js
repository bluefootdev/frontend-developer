import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { getProductsFullText } from '../../../store/reducers/products';

const SuggestedNamesList = props => (
  <ul>
    {
      props.suggestedNames.map(name => (
        <li onClick={() => props.getProductsFullText(name)}>{name}</li>
      ))
    }
  </ul>
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getProductsFullText }, dispatch)
)

export default connect(null, mapDispatchToProps)(SuggestedNamesList);
