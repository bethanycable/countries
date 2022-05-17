import Country from "./Country";
import React from "react";
import { useState } from "react";

const CountryName = ({ name, country }) => {
  const [showCountry, setShowCountry] = useState(false);

  const handleShowButton = () => {
    setShowCountry(!showCountry);
  };

  if (showCountry === true) {
    return (
      <div>
        <Country
          country={country}
          showCountry={showCountry}
          setShowCountry={setShowCountry}
        />
      </div>
    );
  }

  return (
    <div>
      {name}{" "}
      <button props={country} onClick={handleShowButton}>
        {showCountry ? "hide" : "show"}
      </button>
    </div>
  );
};

export default CountryName;
