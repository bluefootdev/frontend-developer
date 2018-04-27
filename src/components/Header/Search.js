import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as searchActions from '../../actions/searchActions';
import Loading from '../Shared/Loading';
import Loadable from 'react-loadable';
import '../../styles/search.css';

export const SearchAutocomplete = Loadable({ loader: () => import("./SearchAutocomplete"), loading: Loading, });
export const SearchSuggestion = Loadable({ loader: () => import("./SearchSuggestion"), loading: Loading, });

export class Search extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      query: '',
    }
  }

  static contextTypes = {
    router: PropTypes.object
  };

  setBodyActive = () => {
    const search = this.props.search;
    document.getElementById('header-overlay').classList.add('active');
    document.getElementById('search').classList.add('active');
    if (search.results.length > 0 && search.products.length > 0) {
      document.getElementById('box').classList.add('active');
    }
  };
  unsetBodyActive = () => {
    document.getElementById('header-overlay').classList.remove('active');
    document.getElementById('search').classList.remove('active');
    document.getElementById('box').classList.remove('active');
  };

  handleChange = (event) => {
    // like "TV"
    if(event.target.value.length > 1) {
      this.props.sendQuery(event.target.value);
      this.setState({query: event.target.value})
    }
  };

  onSubmit = (event) => {
    event.preventDefault();
    document.getElementById('search-input').blur();
    this.context.router.history.push(`/products/busca/${this.state.query}`);
  };

  render() {
    const search = this.props.search;
    return (
      <div id="search" className={'search ready'}>
        <form className="src-form" onSubmit={this.onSubmit}>
          <div className="src-input-wpr">
            <label id="h_search-label" htmlFor="h_search-input" className="src-label">Busca</label>
            <input
              id="search-input"
              className="src-input"
              type="text"
              name="conteudo"
              placeholder="O que você deseja buscar?"
              onFocus={this.setBodyActive}
              onBlur={this.unsetBodyActive}
              onChange={this.handleChange}
              autoComplete="off"
              tabIndex="2"
            />
            <button type="submit" id="h_search-btn" className="src-btn" tabIndex="-1">
              <i className="fas fa-search src-btn-ico" />
            </button>
          </div>
        </form>

        <div id="box" className={'box src-box h_tooltip arrow-top-left ' + (search.results.length > 0 && search.products.length > 0? 'active': '') }>
          <SearchAutocomplete results={search.results} query={this.state.query} />
          <SearchSuggestion products={search.products} query={this.state.query} />
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    search: {
      results: state.search.results.itemsReturned,
      products: state.search.products
    },
  }
}

const mapDispatchToProps = dispatch => ({
  sendQuery: query => {
    dispatch(searchActions.loadAutocompleteSearch(query));
    dispatch(searchActions.loadFullTextProductSearch(query));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);