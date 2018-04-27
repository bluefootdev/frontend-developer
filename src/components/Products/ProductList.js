import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadProductSearch } from '../../actions/productActions';
import * as helpers from '../../utils/helpers';
import '../../styles/productList.css';

export class ProductList extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.query !== nextProps.match.params.query) {
      this.props.loadProductSearch(nextProps.match.params.query);
    }
  }

  componentDidMount() {
    this.props.loadProductSearch(this.props.match.params.query);
  }

  render() {
    const products = this.props.products;

    if(products.length === 0) {
      return (
        <div className="container">
          <div className="row">
            <div className="col center">
              Nenhum resultado encontrado :(
            </div>
          </div>
        </div>
      )
    }

    return(
      <div className="container">
        <div className="row">
          {
            products.map(product => {
              let image = helpers.getFirstImage(product);
              let price = helpers.getBestPrice(product);
              return (
                <div className="col-6 col-sm-6 col-md-4 col-lg-3" key={product.productId}>
                  <Link to={`/product/${product.productId}/${product.linkText}`} title={product.productName} className="col-item">
                    <div className="photo">
                      <img src={image} className="img-responsive" alt={product.productName} />
                      <span className="badge badge-primary">{product.categories[0].replace(/\//g, ' ')}</span>
                    </div>
                    <div className="info">
                      <div className="row">
                        <div className="price-details col">
                          <h1>{product.productName}</h1>
                          <span className="price-new">{price}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
          }

        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    products: state.products.list
  };
}

export default connect(mapStateToProps, { loadProductSearch })(ProductList);