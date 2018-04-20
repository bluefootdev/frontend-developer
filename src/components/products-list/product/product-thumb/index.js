import React from 'react';

const ProductThumb = ({ images }) => (
  <figure className="product-thumb">
    {
      images.map(
        ({ imageUrl, imageLabel, imageId }) => (
          <img
            className="product-thumb-image"
            src={imageUrl}
            alt={imageLabel}
            key={imageId}
          />
        )
      )
    }
  </figure>
);

export default ProductThumb;
