import React from 'react';

import SuggestedNamesList from './suggested-names-list';
import SuggestedProductItems from './suggested-product-items';

import './index.css';


const SuggestContainer = ({ suggestedNames, suggestedProducts }) => (
  <div className="suggest-container">
    {
      suggestedNames &&
      <SuggestedNamesList suggestedNames={suggestedNames} />
    }
    {
      suggestedProducts &&
      <SuggestedProductItems products={suggestedProducts} />
    }
  </div>
);

export default SuggestContainer;
