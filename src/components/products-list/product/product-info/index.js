import React from 'react';

const ProductInfos = ({ nameComplete, sellers = [] }) => (
  <div>
    <h3>{nameComplete}</h3>
    {
      !!sellers.length &&
      <p>Min. Price: ${getMinPrice(sellers)}</p>
    }
  </div>
);

const getMinPrice = (sellers) => (
  sellers.reduce((price, seller) => {
    const priceComparation = seller.commertialOffer.Price;
    return price !== null && price <= priceComparation ? price : priceComparation;
  }, null)
)

export default ProductInfos;
