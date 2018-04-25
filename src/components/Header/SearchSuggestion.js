import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/navbar.css';

export function SearchSuggestion(props) {
  console.log(props)
  return (
    <div className="src-suggestion">
      <div className="h_tooltip-title">Produtos sugeridos:</div>
      <ul className="as-lst sizer szr-3">
        <li className="as-lst-it sz sz-1">
          <a href="#" title="Geladeira /  Refrigerador Electrolux Defrost Cycle DC35A 2 Portas 260 Litros Branco"
             className="as-lnk src-lnk">
            <img className="as-img"
                 alt="Geladeira /  Refrigerador Electrolux Defrost Cycle DC35A 2 Portas 260 Litros Branco"
                 src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0bbe4a26108619.5634fb9c59308.jpg"/>
            <span className="as-name">Geladeira /  Refrigerador Electrolux Defrost Cycle DC35A 2 Portas 260 Litros Branco</span>
            <span className="as-price">R$ 1.139,90</span>
          </a>
        </li>
        <li className="as-lst-it sz sz-2">
          <a href="#" title="Geladeira / Refrigerador Brastemp Frost Free Clean BRM39 352 Litros Evox - Platinum"
             className="as-lnk src-lnk">
            <img className="as-img"
                 alt="Geladeira / Refrigerador Brastemp Frost Free Clean BRM39 352 Litros Evox - Platinum"
                 src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5ae78826108619.5634fb9c53d6b.jpg"/>
            <span className="as-name">Geladeira / Refrigerador Brastemp Frost Free Clean BRM39 352 Litros Evox - Platinum</span>
            <span className="as-price">R$ 2.475,60</span>
          </a>
        </li>
        <li className="as-lst-it sz sz-3">
          <a href="#" title="Geladeira/ Refrigerador Electrolux Frost Free DW42X 380L Inox"
             className="as-lnk src-lnk">
            <img className="as-img" alt="Geladeira/ Refrigerador Electrolux Frost Free DW42X 380L Inox"
                 src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a32d1e26108619.5634fb9c4e861.jpg"/>
            <span className="as-name">Geladeira/ Refrigerador Electrolux Frost Free DW42X 380L Inox</span>
            <span className="as-price">R$ 2.042,43</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

SearchSuggestion.defaultProps = {
  products: [],
};

SearchSuggestion.propTypes = {
  products: PropTypes.array,
};

export default SearchSuggestion;