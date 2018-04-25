import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/navbar.css';

export function SearchAutocomplete(props) {
  return (
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
  );
}

SearchAutocomplete.defaultProps = {
  results: [],
};

SearchAutocomplete.propTypes = {
  results: PropTypes.array,
};

export default SearchAutocomplete;