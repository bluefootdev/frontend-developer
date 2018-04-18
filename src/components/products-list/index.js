import React from 'react';

import Product from "./product";
import { goToProduct } from '../../api';

const ProductsList = (props) => (
  <section>
    {
      props.products.map(product => (
        <Product
          {...product}
          onClick={() => goToProduct(product)}
        />
      ))
    }
  </section>
);

const mapStateToProps = state => {
  const { products } = state.product;
  return { products };
}

export default connect(mapStateToProps)(Header);
