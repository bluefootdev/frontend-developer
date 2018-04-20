import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import onClickOutside from "react-onclickoutside";

import SuggestedNamesList from './suggested-names-list';
import SuggestedProductItems from './suggested-product-items';
import SuggestedContainerTitle from './suggested-container-title';
import { showSuggestions } from '../../../store/reducers/products';

import './index.css';


const SuggestedContainer = onClickOutside(({ suggestedNames, suggestedProducts }) => (
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
));

SuggestedContainer.prototype.handleClickOutside = function(event) {
  this.props.showSuggestions(false);
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ showSuggestions }, dispatch)
)

export default connect(null, mapDispatchToProps)(SuggestedContainer);
