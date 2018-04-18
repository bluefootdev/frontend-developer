import React from 'react';

const ProductThumb = ({imageUrl, alt}) => (
  <figure className="product-image">
    <img src={imageUrl} alt={alt} />
  </figure>
);

export default ProductThumb;
