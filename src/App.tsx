import Layout from "./Components/Layout";
import "./App.css";
import WeatherDataProvider from "./Context/WeatherDataContext";

function App() {
  return (
    <WeatherDataProvider>
      <Layout />
    </WeatherDataProvider>
  );
}

export default App;
