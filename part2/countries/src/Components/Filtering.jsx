import { useState } from "react";
import Countryinfo from "./Countryinfo";

const Filtering = ({ countries, searchedName }) => {
  // Filter the countries dynamically based on the searched term
  const [selectedCountry, setSelected] = useState(null);
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchedName.toLowerCase())
  );

  //console.log(filteredCountries);
  if (filteredCountries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (filteredCountries.length === 1) {
    return <Countryinfo filteredCountries={filteredCountries} />;
  }
  return (
    <div>
      {filteredCountries.map((country) => (
        <div key={country.name.common}>
          <p>
            {country.name.common}
            <button onClick={() => setSelected(country)}>show</button>
          </p>
        </div>
      ))}
      {selectedCountry && <Countryinfo filteredCountries={[selectedCountry]} />}
    </div>
  );
};

export default Filtering;
