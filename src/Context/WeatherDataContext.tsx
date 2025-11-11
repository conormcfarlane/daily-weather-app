import React, { createContext, useContext, useState } from "react";

// Types
type WeatherDataContextType = {
  searchValue: string;
  setSearchValue: (s: string) => void;
};

export const WeatherDataContext = createContext<
  WeatherDataContextType | undefined
>(undefined);

const WeatherDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchValue, setSearchValue] = useState<string>("Berlin");
  return (
    <WeatherDataContext.Provider value={{ searchValue, setSearchValue }}>
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
