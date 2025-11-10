import iconSunny from "../assets/images/icon-sunny.webp";
import { useWeatherApi } from "../Hooks/useWeatherApi";

export default function () {
  const { data, loading, error, location } = useWeatherApi();
  const city = location?.name;
  const country = location?.country;
  const currentTemp =
    data?.current?.temperature_2m != null
      ? Math.round(data?.current?.temperature_2m)
      : null;

  const currentWeatherCards = [
    { title: "Feels like", value: "18", unit: "°C" },
    { title: "Humidity", value: "46", unit: "%" },
    { title: "Wind", value: "14", unit: "km/h" },
    { title: "Precipitation", value: "0", unit: "mm" },
  ];
  return (
    <section className="space-y-8 lg:space-y-11">
      <section className="cureent-forecast px-6 py-11 bg-no-repeat bg-cover bg-center rounded-2xl md:flex md:items-center md:justify-between">
        <div className="text-(length:--fs-28) font-bold text-center">
          <p>
            {city}, {country}
          </p>
          <p className="text-(length:--fs-18) font-medium">
            Tuesday, Aug 5, 2025
          </p>
        </div>
        <div className="flex items-center justify-between">
          <img
            src={iconSunny}
            alt="weather code symbol"
            className="w-30 h-30"
          />
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
                <p>{card.value}</p>
                <p>{card.unit}</p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}
