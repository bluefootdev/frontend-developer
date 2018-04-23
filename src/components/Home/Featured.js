import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import '../../styles/featured.css';

// not the best way, but since there inst a featured endpoint

/*
* Returns the fisrt image url from a product
* @params product: object
* @return string
*/
function getFirstImage(product) {
  return product.items[0].images[0].imageUrl;
}

/*
* Find the min value from product sellers
* @params product: object
* @returs number
*/
function getBestPrice(product) {
  let lowerPrice = [];
  product.items.map(item => {
    item.sellers.map(seller => {
      if(seller.commertialOffer && seller.commertialOffer.AvailableQuantity > 0) {
        lowerPrice.push(seller.commertialOffer.Price);
      }
    });
  });
  return (Math.max.apply(Math, lowerPrice)).toFixed(2);
}

export function Featured(props) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className={'container'}>
        <div className={'row'}>
          <div className={'col-md-12'}>
            <Slider {...settings}>
              {
                props.products.map(product => {
                  let image = getFirstImage(product);
                  let price = getBestPrice(product);
                  return (
                    <div key={product.productId}>
                      <Link to={`/product/${product.productId}/${product.linkText}`} title={product.productName} className={'item'} style={{ backgroundImage:`url('${image}')` }}>
                        <div className={'info'}>

                            <p>{product.productName}</p>
                            <span>A partir de: R${price}</span>

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
  );
}

Featured.defaultProps = {
  products: [],
};

Featured.propTypes = {
  products: PropTypes.array,
};

export default Featured;