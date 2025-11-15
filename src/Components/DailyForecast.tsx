import iconDrizzle from "../assets/images/icon-drizzle.webp";
import { useWeatherApi } from "../Hooks/useWeatherApi";
import { getWeatherIcon } from "../Utils/WeatherIconHelper";
export default function DailyForecast() {
  const { data, loading, error } = useWeatherApi();
  const dailyWeather = data?.daily;

  // const dailyForecastCards: DailyForecastCardData[] = [
  //   { titleDay: "Tue", weatherCode: 3, maxTemp: 23, minTemp: 3 },
  //   { titleDay: "Wed", weatherCode: 3, maxTemp: 23, minTemp: 3 },
  //   { titleDay: "Thur", weatherCode: 3, maxTemp: 23, minTemp: 3 },
  //   { titleDay: "Fri", weatherCode: 3, maxTemp: 23, minTemp: 3 },
  //   { titleDay: "Sat", weatherCode: 3, maxTemp: 23, minTemp: 3 },
  //   { titleDay: "Sun", weatherCode: 3, maxTemp: 23, minTemp: 3 },
  //   { titleDay: "Mon", weatherCode: 3, maxTemp: 23, minTemp: 4 },
  // ];
  return (
    <section className="space-y-5">
      <h2>Daily forecast</h2>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-7">
        {dailyWeather?.time?.map((dailyCard, index) => {
          const icon =
            dailyWeather?.weather_code[index] != null
              ? getWeatherIcon(dailyWeather?.weather_code[index])
              : undefined;
          return (
            <div
              key={dailyCard}
              className="bg-(--color-neutral-800-hsl) px-2.5 py-4 flex flex-col rounded-xl"
            >
              <p className="text-center text-(length:--fs-18) font-medium">
                {new Date(dailyWeather?.time?.[index] ?? "").toLocaleDateString(
                  "en-GB",
                  { weekday: "short" }
                )}
              </p>
              <img
                src={icon?.src}
                alt={icon?.alt}
                className="w-15 self-center"
              />
              <div className="flex justify-between w-full text-(length:--fs-16) font-light ">
                <p className="">
                  {dailyWeather?.temperature_2m_max[index] != null
                    ? Math.round(dailyWeather?.temperature_2m_max[index])
                    : undefined}
                  &deg;
                </p>
                <p>
                  {dailyWeather?.temperature_2m_min[index] != null
                    ? Math.round(dailyWeather?.temperature_2m_min[index])
                    : undefined}
                  &deg;
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
