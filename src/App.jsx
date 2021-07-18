import React from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import { weatherApi } from "./services/weatherApi";

function App() {
  async function handleGetWeather() {
    const response = await weatherApi.get("Curitiba");
    console.log(response.data);
  }
  return (
    <React.Fragment>
      <div className="App">
        <h1>{"hello world".toUpperCase()}</h1>
        <HelloWorld></HelloWorld>

        <button onClick={handleGetWeather}>Enviar</button>
      </div>
    </React.Fragment>
  );
}

export default App;
