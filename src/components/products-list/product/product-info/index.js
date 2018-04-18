import React from 'react';

const ProductInfos = ({productName, description}) => (
  <div>
    <h3>{productName}</h3>
    <p>{description}</p>
  </div>
);

export default ProductInfos;
