import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getAll = () => {
  return axios.get(baseUrl);
};

const getWeather = (lat, long) => {
  return axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,wind_speed_10m&wind_speed_unit=ms&forecast_days=1`
  );
};

export default {
  getAll: getAll,
  getWeather: getWeather,
};
