import React, { createContext, useContext, useState } from "react";

// Types
type Units = {
  temperature: string;
  windSpeed: string;
  precipitation: string;
};
type WeatherDataContextType = {
  searchValue: string;
  setSearchValue: (s: string) => void;
  units: Units;
  setUnits: React.Dispatch<React.SetStateAction<Units>>;
};

export const WeatherDataContext = createContext<
  WeatherDataContextType | undefined
>(undefined);

const WeatherDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchValue, setSearchValue] = useState<string>("Berlin");
  const [units, setUnits] = useState<Units>({
    temperature: "celsius",
    windSpeed: "kmh",
    precipitation: "mm",
  });
  return (
    <WeatherDataContext.Provider
      value={{ searchValue, setSearchValue, units, setUnits }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherDataProvider;
export function useWeatherData() {
  const ctx = useContext(WeatherDataContext);
  if (!ctx) throw new Error("useWeatherData must be used within the Provider");
  return ctx;
}
