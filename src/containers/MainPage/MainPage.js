import React from 'react';
import './MainPage.scss';
import store from '../../store/store';
import Country from '../../components/Country/Country';

const MainPage = () => {
  const countriesList = store.countries.map(country =>
    <Country key={country.id} {...country} />
  )
  return (
    <div className="main">
      <ul className="list">
        {countriesList}
      </ul>
    </div>
  )
};

export default MainPage;
