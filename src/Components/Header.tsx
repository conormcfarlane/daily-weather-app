import { useState } from "react";
import logo from "../assets/images/logo.svg";
import iconUnits from "../assets/images/icon-units.svg";
import iconDropDown from "../assets/images/icon-dropdown.svg";
import { useWeatherData } from "../Context/WeatherDataContext";
import iconCheckMark from "../assets/images/icon-checkmark.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { units, setUnits } = useWeatherData();
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

  const unitButtonMap: Array<{
    key: keyof typeof units; // makes key type safe
    title: string;
    metric: string;
    imperial: string;
    metricLabel: string;
    imperialLabel: string;
  }> = [
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
          <div className="absolute bottom-0 right-0 translate-y-96 w-[214px] cursor-pointer py-2 px-2 bg-(--color-neutral-800-hsl) rounded-xl space-y-2 border border-neutral-600">
            {unitButtonMap.map((unitCard) => {
              const isMetricActive = units[unitCard.key] === unitCard.metric;
              const isImperialActive =
                units[unitCard.key] === unitCard.imperial;
              units[unitCard.key] === unitCard.imperial;
              return (
                <div key={unitCard.key} className="border-b-2 border-gray-700 ">
                  <p className="text-(--color-neutral-300-hsl) px-2 mb-1">
                    {unitCard.title}
                  </p>
                  <div
                    className={`flex justify-between rounded-lg px-2 ${
                      isMetricActive
                        ? "bg-(--color-neutral-700-hsl)"
                        : "bg-(--color-neutral-800-hsl)"
                    }`}
                  >
                    <p
                      className={`py-2 rounded-lg ${
                        isMetricActive ? "bg-(--color-neutral-700-hsl)" : ""
                      }`}
                      onClick={() =>
                        handleUnitChange(unitCard.key, unitCard.metric)
                      }
                    >
                      {unitCard.metricLabel}
                    </p>
                    <img
                      src={isMetricActive ? iconCheckMark : undefined}
                      alt=""
                    />
                  </div>
                  <div
                    className={`flex justify-between rounded-lg px-2 mb-1 ${
                      isImperialActive
                        ? "bg-(--color-neutral-700-hsl)"
                        : "bg-(--color-neutral-800-hsl)"
                    }`}
                  >
                    <p
                      className="py-2"
                      onClick={() =>
                        handleUnitChange(unitCard.key, unitCard.imperial)
                      }
                    >
                      {unitCard.imperialLabel}
                    </p>
                    <img
                      src={isImperialActive ? iconCheckMark : undefined}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
