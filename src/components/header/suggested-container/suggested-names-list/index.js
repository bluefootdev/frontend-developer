import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getProductsFullText } from '../../../../store/reducers/products';
import './index.css';


const SuggestedNamesList = ({suggestedNames, getProductsFullText}) => (
  <ul className="suggested-names">
    {
      suggestedNames.map((name, key) => (
        <li className="suggested-names-item" key={key}>
          <a
            className="is-clickable"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              getProductsFullText(name)
            }}
          >
            {name}
          </a>
        </li>
      ))
    }
  </ul>
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getProductsFullText }, dispatch)
)

export default connect(null, mapDispatchToProps)(SuggestedNamesList);
