import React from 'react';

const Autocomplete = ({text, onChange}) => (
  <div className="autocomplete">
    <input
      type="text"
      value={text}
      placeholder="O que você deseja buscar?"
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default Autocomplete;
