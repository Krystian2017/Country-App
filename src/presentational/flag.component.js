import React from "react";

const CountryFlag = props => {
  return (
    <div className="country-logo-wrapper">
      <img
        className="country-logo"
        src={props.country.imageUrl}
        alt="country photo"
      />
    </div>
  );
};

export default CountryFlag;
