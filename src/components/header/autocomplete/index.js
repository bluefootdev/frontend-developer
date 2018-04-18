import React from 'react';

const Autocomplete = props => {
  return (<div className="autocomplete">
    <input
      type="text"
      placeholder="O que você deseja buscar?"
      onChange={(e) => props.onChange(e.target.value)}
    />
  </div>)
};

export default Autocomplete;
