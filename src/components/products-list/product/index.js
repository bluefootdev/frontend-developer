import React from 'react';

import ProductThumb from "./product-thumb";
import ProductInfos from "./product-info";
import { goToProduct } from '../../../api';

import './index.css';


const Product = (props) => (
  <div className="product is-clickable">
    <ProductThumb {...props} />
    <ProductInfos {...props} />
  </div>
);

export default Product;
