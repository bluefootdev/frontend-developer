import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProductById, clearProduct } from '../../actions/productActions'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import ReactHtmlParser from 'react-html-parser';
import '../../styles/productDetail.css';

export class ProductDetail extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.productId !== nextProps.match.params.productId) {
      this.props.loadProductById(nextProps.match.params.productId);
    }
  }

  componentWillUnmount() {
    this.props.clearProduct();
  }

  componentDidMount() {
    this.props.loadProductById(this.props.match.params.productId);
  }

  formatCurrency(value) {
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  render() {
    const product = this.props.product;

    if(!product.items) {
      return (
        <div className="container">
          <div className="row">
            <div className="col center">
              Carregando…
            </div>
          </div>
        </div>
      )
    }

    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const item = product.items[0];
    const seller = item.sellers[0];

    return (
      <div className={'container'}>
        <div className="row" key={item.itemId}>
          <div className="col-md-5 col-sm-12 item-photo">
            <Slider {...settings}>
              {
                item.images.map(image => {
                  return <img src={image.imageUrl} key={image.imageId} alt={`${product.productName} ${image.imageLabel}`} />
                })
              }
            </Slider>
          </div>
          <div className="col-md-7 col-sm-12">
            <h1>
              {product.brand} {product.productName}
            </h1>
            <small>em {product.categories[0].replace(/\//g, '')}</small>
            <h2>Vendido por <Link to={'/'}>{seller.sellerName}</Link></h2>

            {seller.commertialOffer.Price !== 0 &&
            <div>

              <h6 className="title-price">
                <small>
                  {(Number(seller.commertialOffer.ListPrice) === Number(seller.commertialOffer.Price)) ? '' : `De: ${this.formatCurrency(seller.commertialOffer.ListPrice)}`}
                </small>
              </h6>
              <h3 style={{marginTop: 0}}>Por: {this.formatCurrency(seller.commertialOffer.Price)}</h3>
            </div>
            }

            <div className={'row section d-flex align-items-top'}>
              <div className={'col'}>
                { seller.commertialOffer.Price !== 0 &&
                <div>
                  <h6 className="title-attr">
                    Quantidade
                  </h6>
                  <div className="quantidade d-flex">
                    <div className="btn-minus"><i className="fas fa-minus"/></div>
                    <input defaultValue={1} />
                    <div className="btn-plus"><i className="fas fa-plus"/></div>
                  </div>
                </div>
                }

              </div>

              { seller.commertialOffer.Price === 0 ? (
                <div className={'col center buy'}>
                  <button className="btn">
                    Indisponível
                  </button>
                  <h6>
                    <a><i className="far fa-heart"/> Adicionar na lista de desejos</a>
                  </h6>
                </div>
              ) : (
                <div className={'col center buy'}>
                  <span>Oferta recomendada</span>
                  <button className="btn btn-success">
                    <i className="fas fa-shopping-cart" aria-hidden="true" /> Comprar
                  </button>
                  <h6>
                    <a><i className="far fa-heart"/> Adicionar na lista de desejos</a>
                  </h6>
                </div>
              )
              }

            </div>
          </div>
        </div>


        <div className="row">
          <div className="col">
            <ul className="menu-items">
              <li className="active">Detalhes</li>
              <li>Garantia</li>
              <li>Vendedor</li>
              <li>Envio</li>
            </ul>
            <div className="menu-info">
              { ReactHtmlParser(product.description) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    product: state.products.item
  };
}

export default connect(mapStateToProps, { loadProductById, clearProduct })(ProductDetail);