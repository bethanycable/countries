import Languages from "./Languages";
import React from "react";

const Country = ({ country, showCountry, setShowCountry }) => {
  let count = 0;

  return (
    <div>
      <h2>{country.name.common}</h2>{" "}
      <button onClick={() => setShowCountry(!showCountry)}>
        {showCountry ? "hide" : "show"}
      </button>
      <p>capital {country.capital[0]} </p>
      <p>area {country.area}</p>
      <h4>languages:</h4>
      <ul>
        {Object.values(country.languages).map((language) => (
          <Languages key={count++} languages={language} />
        ))}
      </ul>
      <img
        src={country.flags.svg}
        alt={`flag of ${country.name.common}`}
        height="150"
        width="200"
      />
    </div>
  );
};

export default Country;
