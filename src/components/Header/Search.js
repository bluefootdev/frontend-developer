import React, { Component } from 'react';
import '../../styles/search.css';

export class Search extends Component {
  render() {
    return (
      <div className={'search'}>
        <form className="src-form">
          <div className="src-input-wpr">
            <label id="h_search-label" htmlFor="h_search-input" className="src-label">Busca</label>
            <input id="h_search-input" className="src-input" type="text" name="conteudo" placeholder="O que você deseja buscar?" autoComplete="off" tabIndex="2" />
              <button type="submit" id="h_search-btn" className="src-btn" tabIndex="-1">
                <i className="fas fa-search" />
              </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;