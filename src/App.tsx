import { use, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Layout from "./Components/Layout";
import "./hooks/useWeatherApi";
import "./App.css";
import { useWeatherApi } from "./hooks/useWeatherApi";

function App() {
  useWeatherApi();
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
