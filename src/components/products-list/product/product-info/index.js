import React from 'react';

const ProductInfos = ({ name, sellers }) => (
  <div>
    <h3>{name}</h3>
    <p>Min. Price: ${getMinPrice(sellers)}</p>
  </div>
);

const getMinPrice = (sellers) => (
  sellers.reduce((price, seller) => {
    const priceComparation = seller.commertialOffer.Price;
    return price !== null && price <= priceComparation ? price : priceComparation;
  }, null)
)

export default ProductInfos;
