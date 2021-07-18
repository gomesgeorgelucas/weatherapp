import React, { useEffect, useState } from "react";
import "./App.css";
import { weatherApi } from "./services/weatherApi";
import { FaTemperatureHigh, FaWind } from "react-icons/fa";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");

  async function handleGetWeather(evt) {
    evt.preventDefault();
    const response = await weatherApi.get(search);
    setCity(search);
    console.log(response.data);
    setWeather(response.data);
  }

  useEffect(() => {
    //handleGetWeather();
  });
  return (
    <React.Fragment>
      <div className="App">
        <header>
          <form onSubmit={handleGetWeather}>
            <input
              type="text"
              value={search}
              onChange={(evt) => setSearch(evt.target.value)}
            />
            <button>Enviar</button>
          </form>
        </header>
        {weather && (
          <main>
            {/* <p>{JSON.stringify(weather)}</p> */}
            <h1>{city}</h1>
            <section className="current-weather">
              <h2> Current Weather</h2>
              <p>{weather.temperature}</p>
              <p>{weather.description}</p>
              <section className="forecast">
                <h2>Forecast</h2>
                <ol>
                  {weather.forecast.map((day) => (
                    <li>
                      <div>
                        <FaTemperatureHigh />
                        <p>{day.temperature}</p>
                      </div>
                      <div>
                        <FaWind />
                        <p>{day.wind}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            </section>
          </main>
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
