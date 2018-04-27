import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css';

export function SearchAutocomplete(props) {
  const escapeRegExp = (str = '') => (
    str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1')
  );

  const Highlight = ({ search = '', children = '' }) => {
    const patt = new RegExp(`(${escapeRegExp(search)})`, 'i');
    const parts = String(children).split(patt);

    if (search) {
      return parts.map((part, index) => (
        patt.test(part) ? <span className="ac-term" key={index}>{part}</span> : part
      ));
    } else {
      return children;
    }
  };

  const maxValues = {
    suggestions: 3,
    seeMore: 2,
  };

  const results = {
    suggestions: [],
    seeMore: [],
  };

  const initProps = () => {
    props.results.map(result => {
      if(result.items.length === 0 && results.seeMore.length < maxValues.seeMore) {
        results.seeMore.push(result);
      }

      if(result.items.length !== 0 && results.suggestions.length < maxValues.suggestions) {
        result.items.map(subItem => {
          return results.suggestions.push(subItem);
        })
      }
      return true;
    });
  };
  initProps();

  return (
    <div className="src-autocomplete">
      <div className="h_tooltip-title">Você quis dizer:</div>
      <ul className="ac-lst sizer szr-7">
        {
          results.suggestions.map(item => {
            return(
              <li className="ac-lst-it sz sz-1" key={item.itemId}>
                <Link to={`/products/busca/${item.nameComplete}`} className="ac-lnk src-lnk">
                  <Highlight search={props.query}>{item.nameComplete}</Highlight>
                </Link>
              </li>
            )
          })
        }
      </ul>
      <div className="h_tooltip-title">Veja mais…</div>
      <ul className="ac-lst sizer szr-7">
        {
          results.seeMore.map((item, i) => {
            // key by index isnt good, but since we dont have the categoryId…
            return (
              <li className="ac-lst-it sz sz-1" key={i}>
                <Link to={`/products/busca/${props.query}/category/${item.name}`} className="ac-lnk src-lnk">
                  <Highlight search={props.query}>{item.name}</Highlight>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

SearchAutocomplete.defaultProps = {
  results: [],
  query: '',
};

SearchAutocomplete.propTypes = {
  results: PropTypes.array,
  query: PropTypes.string,
};

export default SearchAutocomplete;