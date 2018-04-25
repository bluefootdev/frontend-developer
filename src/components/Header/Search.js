import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as searchActions from '../../actions/searchActions';
import Loading from '../Shared/Loading';
import Loadable from 'react-loadable';
import '../../styles/search.css';

export const SearchAutocomplete = Loadable({ loader: () => import("./SearchAutocomplete"), loading: Loading, });
export const SearchSuggestion = Loadable({ loader: () => import("./SearchSuggestion"), loading: Loading, });

export class Search extends Component {
  setBodyActive = () => {
    document.getElementById('header-overlay').classList.add('active');
    document.getElementById('search').classList.add('active');
    document.getElementById('box').classList.add('active');
  };
  unsetBodyActive = () => {
    document.getElementById('header-overlay').classList.remove('active');
    document.getElementById('search').classList.remove('active');
    document.getElementById('box').classList.remove('active');
  };

  handleChange = (event) => {
    if(event.target.value.length > 2) {
      this.props.sendQuery('teste');
      //event.target.value
    }
  };

  onSubmit = (event) => {
    event.preventDefault();
    // foward to the filtered products list
    // but, not now :v
  };

  render() {
    const search = this.props.search;
    return (
      <div id="search" className={'search ready'}>
        <form className="src-form" onSubmit={this.onSubmit}>
          <div className="src-input-wpr">
            <label id="h_search-label" htmlFor="h_search-input" className="src-label">Busca</label>
            <input
              id="h_search-input"
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
              <i className="fas fa-search" />
            </button>
          </div>
        </form>

        <div id="box" className="box src-box h_tooltip arrow-top-left">
          <SearchAutocomplete results={search.results} />
          <SearchSuggestion products={search.products} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    search: {
      results: state.search.results.itemsReturned,
      products: state.search.products
    },
  }
};

const mapDispatchToProps = dispatch => ({
  sendQuery: query => {
    dispatch(searchActions.loadAutocompleteSearch(query));
    dispatch(searchActions.loadFullTextProductSearch(query));
  },
});

// export default Search;
export default connect(mapStateToProps, mapDispatchToProps)(Search);