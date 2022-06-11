import React from "react";
import "./Name.css";
const Name = (props) => {
  const infoCountryName = props.infoCountry;

  // const countryName = infoCountryName.reduce((Country) => {Country
  // console.log(Country)} ,0)
  const countryName = [];
  let totalPopulation = 0;
  for (let i = 0; i < infoCountryName.length; i++) {
    const country = infoCountryName[i];
    totalPopulation += country.population;
    countryName.push(...country.capital);
  }

  return (
    <div>
      <h3>
        Your Choose Country Name :{" "}
        {countryName.map((name) => (
          <span> {name} , </span>
        ))}
      </h3>
      <h3>
        ToalPopulation : <span>{totalPopulation}</span>
      </h3>
    </div>
  );
};

export default Name;
