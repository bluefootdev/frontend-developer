import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import * as helpers from '../../utils/helpers'
import '../../styles/featured.css'

// not the best way, but since there inst a featured endpoint
export function Featured (props) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div>
      <div className={'container'}>
        <div className={'row'}>
          <div className={'col-md-12'}>
            <Slider {...settings}>
              {
                props.products.map(product => {
                  const image = helpers.getFirstImage(product)
                  const price = helpers.getBestPrice(product)
                  return (
                    <div key={product.productId}>
                      <Link to={`/product/${product.productId}/${product.linkText}`} title={product.productName} className={'item'} style={{ backgroundImage: `url('${image}')` }}>
                        <div className={'info'}>
                          <p>{product.productName}</p>
                          <span>A partir de {price}</span>
                        </div>
                      </Link>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

Featured.defaultProps = {
  products: [],
}

Featured.propTypes = {
  products: PropTypes.array,
}

export default Featured
