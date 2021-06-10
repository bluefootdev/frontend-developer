import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as helpers from '../../utils/helpers'
import '../../styles/navbar.css'

export function SearchSuggestion (props) {
  return (
    <div className="src-suggestion">
      <div className="h_tooltip-title">Produtos sugeridos:</div>
      <ul className="as-lst sizer szr-3">
        {
          props.products.map(product => {
            let image = helpers.getFirstImage(product)
            let price = helpers.getBestPrice(product)
            return (
              <li className="as-lst-it sz" key={product.productId}>
                <Link to={`/product/${product.productId}/${product.linkText}`} title={product.productName} className={'as-lnk src-lnk'}>
                  <img className="as-img"
                       alt={product.productName}
                       src={image} />
                  <span className="as-name">{product.productName}</span>
                  <span className="as-price">{price}</span>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

SearchSuggestion.defaultProps = {
  products: [],
}

SearchSuggestion.propTypes = {
  products: PropTypes.array,
}

export default SearchSuggestion
