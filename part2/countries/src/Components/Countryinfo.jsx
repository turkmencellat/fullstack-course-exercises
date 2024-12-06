import { useEffect, useState } from "react";
import help from "../services/help";

const Countryinfo = ({ filteredCountries }) => {
  const [weatherData, setWeather] = useState(null);
  useEffect(() => {
    help
      .getWeather(
        filteredCountries[0].latlng[0],
        filteredCountries[0].latlng[1]
      )
      .then((response) => {
        setWeather(response.data);
      });
  });

  let temp = null;
  let wind = null;
  if (weatherData != null) {
    temp = weatherData.current.temperature_2m;
    wind = weatherData.current.wind_speed_10m;
  }

  return (
    <div>
      <h1>{filteredCountries[0].name.common}</h1>
      <p>capital {filteredCountries[0].capital}</p>
      <p>area {filteredCountries[0].area}</p>
      <h2>languages:</h2>
      <ul>
        {Object.values(filteredCountries[0].languages).map((lan) => (
          <li key={lan}>{lan}</li>
        ))}
      </ul>
      <img src={filteredCountries[0].flags.png} />
      <h1>Weather in {filteredCountries[0].capital}</h1>
      <p>temperature {temp} Celcius</p>
      <p>wind {wind} m/s</p>
    </div>
  );
};

export default Countryinfo;
