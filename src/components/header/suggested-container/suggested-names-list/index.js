import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getProductsFullText } from '../../../../store/reducers/products';
import './index.css';


const SuggestedNamesList = props => (
  <ul className="suggested-names">
    {
      props.suggestedNames.map(name => (
        <li
          className="suggested-names-item"
          onClick={() => props.getProductsFullText(name)}
        >
        {name}
        </li>
      ))
    }
  </ul>
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getProductsFullText }, dispatch)
)

export default connect(null, mapDispatchToProps)(SuggestedNamesList);
