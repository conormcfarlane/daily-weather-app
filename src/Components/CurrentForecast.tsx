import iconSunny from "../assets/images/icon-sunny.webp";
import { useWeatherData } from "../Context/WeatherDataContext";
import { useWeatherApi } from "../Hooks/useWeatherApi";
import { getWeatherIcon } from "../Utils/WeatherIconHelper";

type currentWeatherCards = {
  title: string;
  value: number | undefined;
  unit: any;
};

export default function () {
  const { data, loading, error, location } = useWeatherApi();
  const { units } = useWeatherData();
  const city = location?.name;
  const country = location?.country;
  const currentForecast = data?.current;
  const currentTemp =
    currentForecast?.temperature_2m != null
      ? Math.round(currentForecast?.temperature_2m)
      : null;

  // Values for currentWeatherCards
  const apparentTemp =
    currentForecast?.apparent_temperature != null
      ? Math.round(currentForecast.apparent_temperature)
      : undefined;
  const humidity =
    currentForecast?.relative_humidity_2m != null
      ? Math.round(currentForecast.relative_humidity_2m)
      : undefined;
  const wind =
    currentForecast?.wind_speed_10m != null
      ? Math.round(currentForecast.wind_speed_10m)
      : undefined;
  const precipiation =
    currentForecast?.precipitation != null
      ? Math.round(currentForecast.precipitation)
      : undefined;

  const currentWeatherCards: currentWeatherCards[] = [
    { title: "Feels like", value: apparentTemp, unit: "°" },
    { title: "Humidity", value: humidity, unit: "%" },
    { title: "Wind", value: wind, unit: units.windSpeed },
    { title: "Precipitation", value: precipiation, unit: units.precipitation },
  ];

  const date = new Date();
  const weekday = date.toLocaleDateString("en-GB", { weekday: "long" });
  const day = date.toLocaleDateString("en-GB", { day: "numeric" });
  const month = date.toLocaleDateString("en-GB", { month: "short" });
  const year = date.toLocaleDateString("en-GB", { year: "numeric" });
  const customDate = `${weekday}  ${month}, ${day} ${year}`;

  const weatherCode = currentForecast?.weather_code;
  const icon = weatherCode != null ? getWeatherIcon(weatherCode) : undefined;
  const iconSrc = icon?.src;
  const iconAlt = icon?.alt;

  return (
    <section className="space-y-8 lg:space-y-11">
      <section className="cureent-forecast px-6 py-11 bg-no-repeat bg-cover bg-center rounded-2xl md:flex md:items-center md:justify-between">
        <div className="text-(length:--fs-28) font-bold text-center">
          <p>
            {city}, {country}
          </p>

          <p className="text-(length:--fs-18) font-medium">{customDate}</p>
        </div>
        <div className="flex items-center justify-between">
          <img src={iconSrc} alt={iconAlt} className="w-30 h-30" />
          <div className="flex text-(length:--fs-96)">
            <p>{currentTemp}</p>
            <span>&deg;</span>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {currentWeatherCards.map((card) => {
          return (
            <div
              key={card.title}
              className="bg-(--color-neutral-800-hsl) space-y-6 p-5 rounded-xl"
            >
              <p className="text-(length:--fs-18) font-medium text-(--color-neutral-200-hsl) ">
                {card.title}
              </p>
              <div className="flex text-(length:--fs-32) font-light">
                <p>
                  {card.value} {card.unit}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}
