import React from 'react';

const Country = (props) => {
  const {name, capital} = props;
  return (
    <li className="country">
      <div>{name}</div>
      <div>{capital}</div>
    </li>
  )
};

export default Country;
