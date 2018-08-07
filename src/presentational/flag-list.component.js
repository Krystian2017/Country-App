import React from 'react';
import { Link } from 'react-router';
import CountryFlag from '../presentational/flag.component';

const CountryFlagList = (props) => (
  <div className="countries-list">
    {props.countries.map(country => {
      return (
        <div className="single-country" key={country.id}>
          <Link className='logo' to={'countries/country/' + country.id}>
            <CountryFlag country={country} />
          </Link>
          <button onClick={props.deleteCountry.bind(null, country.id)}>DELETE</button>
        </div>
      )
    })}
  </div>
);

export default CountryFlagList;