import React, { useEffect, useState } from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import { weatherApi } from "./services/weatherApi";

function App() {
  const [weather, setWeather] = useState(null);
  const city = "Amazonas";

  async function handleGetWeather() {
    const response = await weatherApi.get(city);
    console.log(response.data);
    setWeather(response.data);
  }

  useEffect(() => {
    handleGetWeather();
  });
  return (
    <React.Fragment>
      <div className="App">
        {/*
             <header>
                <button onClick={handleGetWeather}>Enviar</button>
            </header>
         */}
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
                      <p>{day.temperature}</p>
                      <p>{day.wind}</p>
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
