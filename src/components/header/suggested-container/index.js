import React from 'react';

import SuggestedNamesList from './suggested-names-list';
import SuggestedProductItems from './suggested-product-items';
import SuggestedContainerTitle from './suggested-container-title';

import './index.css';


const SuggestedContainer = ({ suggestedNames, suggestedProducts }) => (
  <div className="suggested-container">
    {
      suggestedNames &&
      <div className="suggested-container-child suggested-container-names">
        <SuggestedContainerTitle title="Você quis dizer:" />
        <SuggestedNamesList suggestedNames={suggestedNames} />
      </div>
    }
    {
      suggestedProducts &&
      <div className="suggested-container-child suggested-container-products">
        <SuggestedContainerTitle title="Produtos sugeridos:" />
        <SuggestedProductItems products={suggestedProducts} />
      </div>
    }
  </div>
);

export default SuggestedContainer;
