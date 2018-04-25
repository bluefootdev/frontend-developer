import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as searchActions from '../../actions/searchActions';
import '../../styles/search.css';

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

  fooBar = (event) => {
    console.log(event.target.value.length);
    this.props.sendMessage('teste');
  };

  render() {
    console.log(this.props)
    return (
      <div id="search" className={'search ready'}>
        <form className="src-form">
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
              onChange={this.fooBar}
              autoComplete="off"
              tabIndex="2"
            />
            <button type="submit" id="h_search-btn" className="src-btn" tabIndex="-1">
              <i className="fas fa-search" />
            </button>
          </div>
        </form>

        <div id="box" className="box src-box h_tooltip arrow-top-left">
          <div className="src-autocomplete">
            <div className="h_tooltip-title">Você quis dizer:</div>
            <ul className="ac-lst sizer szr-7">
              <li className="ac-lst-it sz sz-1">
                <a className="ac-lnk src-lnk" href="#">
                  <span className="ac-term">gela</span>deira
                </a>
              </li>
              <li className="ac-lst-it sz sz-2">
                <a className="ac-lnk src-lnk" href="#">
                  <span className="ac-term">gela</span>deira frost free
                </a>
              </li>
              <li className="ac-lst-it sz sz-3">
                <a className="ac-lnk src-lnk" href="#">
                  <span className="ac-term">gela</span>deira brastemp
                </a>
              </li>
              <li className="ac-lst-it sz sz-4">
                <a className="ac-lnk src-lnk" href="#">
                  <span className="ac-term">gela</span>deira inox
                </a>
              </li>
              <li className="ac-lst-it sz sz-5">
                <a className="ac-lnk src-lnk" href="#">
                  <span className="ac-term">gela</span>deiras
                </a>
              </li>
              <li className="ac-lst-it sz sz-6">
                <a className="ac-lnk src-lnk" href="#">
                  <span className="ac-term">gela</span>deira inverse
                </a>
              </li>
              <li className="ac-lst-it sz sz-7">
                <a className="ac-lnk src-lnk" href="#">
                  <span className="ac-term">gela</span>deira brastemp inverse 422 litros extra larga com muita coisa la dentro que vc vai ficar lotado de frase grande pra gente ver o que acontece!
                </a>
              </li>
            </ul>
          </div>
          <div className="src-suggestion">
            <div className="h_tooltip-title">Produtos sugeridos:</div>
            <ul className="as-lst sizer szr-3">
              <li className="as-lst-it sz sz-1">
                <a href="#" title="Geladeira /  Refrigerador Electrolux Defrost Cycle DC35A 2 Portas 260 Litros Branco" className="as-lnk src-lnk">
                  <img className="as-img" alt="Geladeira /  Refrigerador Electrolux Defrost Cycle DC35A 2 Portas 260 Litros Branco" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0bbe4a26108619.5634fb9c59308.jpg" />
                  <span className="as-name">Geladeira /  Refrigerador Electrolux Defrost Cycle DC35A 2 Portas 260 Litros Branco</span>
                  <span className="as-price">R$ 1.139,90</span>
                </a>
              </li>
              <li className="as-lst-it sz sz-2">
                <a href="#" title="Geladeira / Refrigerador Brastemp Frost Free Clean BRM39 352 Litros Evox - Platinum" className="as-lnk src-lnk">
                  <img className="as-img" alt="Geladeira / Refrigerador Brastemp Frost Free Clean BRM39 352 Litros Evox - Platinum" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5ae78826108619.5634fb9c53d6b.jpg" />
                  <span className="as-name">Geladeira / Refrigerador Brastemp Frost Free Clean BRM39 352 Litros Evox - Platinum</span>
                  <span className="as-price">R$ 2.475,60</span>
                </a>
              </li>
              <li className="as-lst-it sz sz-3">
                <a href="#" title="Geladeira/ Refrigerador Electrolux Frost Free DW42X 380L Inox" className="as-lnk src-lnk">
                  <img className="as-img" alt="Geladeira/ Refrigerador Electrolux Frost Free DW42X 380L Inox" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a32d1e26108619.5634fb9c4e861.jpg" />
                  <span className="as-name">Geladeira/ Refrigerador Electrolux Frost Free DW42X 380L Inox</span>
                  <span className="as-price">R$ 2.042,43</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    results: state.itemsReturned
  }
};

const mapDispatchToProps = dispatch => ({
  sendMessage: query => {
    dispatch(searchActions.loadAutocompleteSearch(query));
    //dispatch(navigateTo({ routeName: 'messagesList' }));
  },
});

// export default Search;
export default connect(mapStateToProps, mapDispatchToProps)(Search);