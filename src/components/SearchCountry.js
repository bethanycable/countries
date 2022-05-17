import React from "react";

const SearchCountry = ({ filterCountries, setFilter }) => {
  const handleSearchChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div>
      find countries{" "}
      <input value={filterCountries} onChange={handleSearchChange} />
    </div>
  );
};

export default SearchCountry;
