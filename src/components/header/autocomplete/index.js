import React from 'react';

import './index.css';

const Autocomplete = ({text, onChange}) => (
  <div className="autocomplete">
    <input
      className="autocomplete-textfield"
      type="text"
      value={text}
      placeholder="O que você deseja buscar?"
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default Autocomplete;
