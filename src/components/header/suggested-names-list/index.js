import React from 'react';

const SuggestedNamesList = props => (
  <ul>
    {
      props.suggestedNames.map(name => (
        <li>{name}</li>
      ))
    }
  </ul>
);

export default SuggestedNamesList;
