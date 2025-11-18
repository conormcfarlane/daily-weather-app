import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import iconUnits from "../assets/images/icon-units.svg";
import iconDropDown from "../assets/images/icon-dropdown.svg";
import { useWeatherData } from "../Context/WeatherDataContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
  const { setUnits } = useWeatherData();
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleUnitChange = (unitType: string, choice: string) => {
    setUnits((prev) => ({ ...prev, [unitType]: choice }));
    // ^^^^ Bracket evaluates unit type
    // without them unitType:choice
    // with them temperature:choice
    // temperature:"fahrenheit"
  };

  const unitButtonMap = [
    {
      key: "temperature",
      title: "Temperature",
      metric: "celsius",
      imperial: "fahrenheit",
      metricLabel: "Celsius (C)",
      imperialLabel: "Fahrenheit (F)",
    },
    {
      key: "windSpeed",
      title: "Wind Speed",
      metric: "kmh",
      imperial: "mph",
      metricLabel: "km/h",
      imperialLabel: "mph",
    },
    {
      key: "precipitation",
      title: "Precipitation",
      metric: "mm",
      imperial: "in",
      metricLabel: "Millimetres (mm)",
      imperialLabel: "Inches (in)",
    },
  ];

  return (
    <section className="relative flex justify-between">
      <img src={logo} alt="site logo" className="w-33 h-10" />
      <div
        className=" flex items-center gap-2.5  bg-(--color-neutral-800-hsl) px-4 py-2 rounded-xl cursor-pointer "
        onClick={handleClick}
      >
        <img src={iconUnits} alt="dropdown logo" className="w-3.5 h-3.5" />
        <p className="text-white">Units</p>
        <img src={iconDropDown} alt="dropdown image" />
        {isMenuOpen && (
          <div className="absolute bottom-0 right-0 translate-y-91 w-[214px] cursor-pointer p-2 bg-(--color-neutral-800-hsl) rounded-xl space-y-2 border border-neutral-600">
            {unitButtonMap.map((unitCard) => {
              return (
                <div className="border-b-2 border-gray-700 px-2 ">
                  <p className="text-(--color-neutral-300-hsl)">
                    {unitCard.title}
                  </p>
                  <p
                    className="py-2"
                    onClick={() =>
                      handleUnitChange(unitCard.key, unitCard.metric)
                    }
                  >
                    {unitCard.metricLabel}
                  </p>
                  <p
                    className="py-2"
                    onClick={() =>
                      handleUnitChange(unitCard.key, unitCard.imperial)
                    }
                  >
                    {unitCard.imperialLabel}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
