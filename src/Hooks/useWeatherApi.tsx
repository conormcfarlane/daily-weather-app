import { useEffect, useState } from "react";
import { useWeatherData } from "../Context/WeatherDataContext";

type GeoCodeResultItem = {
  name: string;
  latitude: number;
  longitude: number;
  country?: string;
};
type GeoCodeResponse = {
  results?: GeoCodeResultItem[];
};
export type WeatherResponseItem = {
  current?: {
    apparent_temperature: number;
    relative_humidity_2m: number;
    temperature_2m: number;
    precipitation: number;
    weather_code: number;
    wind_speed_10m: number;
  };
  daily?: {
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
    time: number[];
  };
  hourly?: {
    time: number[];
    temperature_2m: number[];
    weather_code: number[] | undefined;
  };
};
type LocationItems = {
  name: string;
  country?: string;
};

export function useWeatherApi() {
  const [data, setData] = useState<WeatherResponseItem | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);
  const [location, setLocation] = useState<LocationItems | null>(null);
  const { searchValue } = useWeatherData();

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        // 1.Fetch geoData
        let query = searchValue?.trim() || "Berlin";
        const geoResponse = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
            query
          )}&count=10&language=en&format=json`
        );
        if (!geoResponse.ok) {
          throw new Error(`HTTP Error: ${geoResponse.status}`);
        }
        const geoData = (await geoResponse.json()) as GeoCodeResponse;
        console.log(geoData);
        const firstResult = geoData?.results?.[0];
        if (!firstResult) {
          setError(new Error("No geocoding results"));
          setLoading(false);
          return;
        }
        const { latitude, longitude, country, name } = firstResult;
        setLocation({ name, country });
        console.log(latitude, longitude, country, name);

        // 2.Fetch Weather Data using LAT + LONG
        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m`
        );
        if (!weatherResponse.ok) {
          throw new Error(`HTTP Error ${weatherResponse.status}`);
        }
        const weatherData =
          (await weatherResponse.json()) as WeatherResponseItem;
        console.log(weatherData);
        setData(weatherData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchWeatherData();
  }, [searchValue]);
  return { data, loading, error, location };
}
