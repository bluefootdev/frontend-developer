import React from 'react';

import ProductThumb from "./product-thumb";
import ProductInfos from "./product-info";
import { goToProduct } from '../../../api';


const Product = (props) => (
  <div className="product">
    <ProductThumb {...props} />
    <ProductInfos {...props} />
  </div>
);

export default Product;
