import React from 'react';

const ProductThumb = ({images}) => (
  <figure className="product-image">
    {
      images.map(
        ({imageUrl, imageLabel, imageId}) => (
          <img src={imageUrl} alt={imageLabel} key={imageId} />
        )
      )
    }
  </figure>
);

export default ProductThumb;
