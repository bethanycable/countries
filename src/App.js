import "./App.css";

import { useEffect, useState } from "react";

import Countries from "./components/Countries";
import SearchCountry from "./components/SearchCountry";
import axios from "axios";

function App() {
  const [filterCountries, setFilterCountries] = useState("");

  return (
    <div>
      <SearchCountry
        filterCountries={filterCountries}
        setFilter={setFilterCountries}
      />
      <Countries filterCountries={filterCountries} />
    </div>
  );
}

export default App;
