import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/productList.css';

export class ProductList extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <Link to="/" className="col-item">
              <div className="photo">
                <img src="http://agenciabluefoot.vteximg.com.br/arquivos/ids/155401/amarela.jpg?v=636029709278930000" className="img-responsive" alt="Product" />
                <span className="badge badge-primary">Kit</span>
              </div>
              <div className="info">
                <div className="row">
                  <div className="price-details col">
                    <h1>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</h1>
                    <span className="price-new">$110.00</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    );
  }
}

export default ProductList;