import React from 'react';


const SuggestedProductItems = ({products = []}) => {
  return (<div>
    {
      products.map(product => (
        <p>{JSON.stringify(product)}</p>
      ))
    }
  </div>)
}

export default SuggestedProductItems;
