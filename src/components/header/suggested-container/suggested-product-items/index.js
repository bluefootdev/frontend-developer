import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getProductsFullText } from '../../../../store/reducers/products';
import './index.css';


const SuggestedProductItems = ({ products = [], getProductsFullText }) => {
  return (
    <div className="suggested-products">
      {
        products.map(product => (
          <div
            key={product.itemId}
            className="suggested-product is-clickable"
            onClick={() => getProductsFullText(product.nameComplete)}
          >
            <img
              className="suggested-product-image"
              src={product.imageUrl}
              alt={product.name}
            />
            <h5>{product.name}</h5>
          </div>
        ))
      }
    </div>
  )
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getProductsFullText }, dispatch)
)

export default connect(null, mapDispatchToProps)(SuggestedProductItems);
