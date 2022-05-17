import { useEffect, useState } from "react";

import Country from "./Country";
import CountryName from "./CountryName";
import React from "react";
import Weather from "./Weather";
import axios from "axios";

const Countries = ({ filterCountries }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${filterCountries}`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => {
        console.log("Error", err.message);
      });
  }, [filterCountries]);

  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countries.length > 1) {
    return countries.map((country) => (
      <CountryName
        key={country.capital}
        name={country.name.common}
        country={country}
      />
    ));
  } else if (countries.length === 1) {
    return (
      <div>
        <Country country={countries[0]} />
        <Weather capital={countries[0].capital} />
      </div>
    );
  }
};

export default Countries;
