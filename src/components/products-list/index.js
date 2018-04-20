import React from 'react';
import { connect } from 'react-redux';

import Product from "./product";
import { goToProduct } from '../../api';

import './index.css';

const ProductsList = (props) => (
  <section className="products-list">
    {
      !!props.products.length && props.products.map((product, key) => (
        <Product
          key={key}
          {...product}
          onClick={() => goToProduct(product)}
        />
      ))
    }
    {
      !props.products.length &&
      <h1 className="message-list">
        Nenhum produto para listar
      </h1>
    }
  </section>
);

const mapStateToProps = state => {
  const { products } = state.product;
  return { products };
}

export default connect(mapStateToProps)(ProductsList);
