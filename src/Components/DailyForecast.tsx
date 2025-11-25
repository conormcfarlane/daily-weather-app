import { useWeatherApi } from "../Hooks/useWeatherApi";
import { getWeatherIcon } from "../Utils/WeatherIconHelper";
import Skeleton from "./Skeleton";
export default function DailyForecast() {
  const { data, loading} = useWeatherApi();
  const dailyWeather = data?.daily;

  return (
    <section className="space-y-5">
      <h2>Daily forecast</h2>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-7">
        {loading
          ? [1, 2, 3, 4, 5, 6, 7].map((i) => (
              <Skeleton key={i} variant="dailyCard" />
            ))
          : dailyWeather?.time?.map((dailyCard, index) => {
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
                    {new Date(
                      dailyWeather?.time?.[index] ?? ""
                    ).toLocaleDateString("en-GB", { weekday: "short" })}
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
