import axios from "axios";

export const weatherApi = axios.create({
  baseURL: "https://goweather.herokuapp.com/weather/",
});
