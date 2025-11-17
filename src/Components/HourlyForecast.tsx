import { useState } from "react";
import iconSunny from "../assets/images/icon-sunny.webp";
import { useWeatherApi } from "../Hooks/useWeatherApi";
import { getWeatherIcon } from "../Utils/WeatherIconHelper";

export default function HourlyForecast() {
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);

  const { data } = useWeatherApi();
  const dailyWeather = data?.daily;
  const hourlyData = data?.hourly;
  const startIndex = 24 * selectedDayIndex;
  const endIndex = startIndex + 24;
  return (
    <section className="bg-(--color-neutral-800-hsl) rounded-xl px-4 py-6 space-y-4 lg:max-h-172 lg:overflow-y-auto">
      <div className="flex justify-between">
        <h2>Hourly forecast</h2>
        <select
          name="dayOfWeek"
          id=""
          className="bg-(--color-neutral-600-hsl) px-4 py-2 rounded-xl cursor-pointer"
          value={selectedDayIndex}
          onChange={(e) => setSelectedDayIndex(Number(e.target.value))}
        >
          {dailyWeather?.time.map((dayTimeStamp, dayTimeStampindex) => {
            console.log(selectedDayIndex);
            const dayTimeStampFormatted = new Date(
              dayTimeStamp
            ).toLocaleDateString("en-GB", { weekday: "long" });
            return (
              <option className="cursor-pointer" value={dayTimeStampindex}>{dayTimeStampFormatted} </option>
            );
          })}
        </select>
      </div>
      <div className="grid grid-row-auto gap-4">
        {hourlyData?.time
          .slice(startIndex, endIndex)
          .map((timeMark, timeMarkIndex) => {
            const actualIndex = startIndex + timeMarkIndex;
            const timeFormatted = new Date(timeMark).toLocaleTimeString(
              "en-GB",
              {
                hour: "numeric",
                hour12: true,
              }
            );
            const hourlyTemp =
              hourlyData?.temperature_2m[actualIndex] != null
                ? Math.round(hourlyData.temperature_2m[actualIndex])
                : undefined;
            const hourlyWeatherCode = (
              hourlyData?.weather_code as number[] | undefined
            )?.[actualIndex];
            const hourlyIcon =
              hourlyWeatherCode != null
                ? getWeatherIcon(hourlyWeatherCode)
                : undefined;
            return (
              <div className="flex justify-between items-center px-4 py-2.5 bg-(--color-neutral-700-hsl)  rounded-xl">
                <div className="flex text-(length:--fs-20) items-center">
                  <img
                    src={hourlyIcon?.src}
                    alt={hourlyIcon?.alt}
                    className="w-10 h-10"
                  />
                  <div className="flex gap-2">
                    <p>{timeFormatted}</p>
                    <p></p>
                  </div>
                </div>
                <p>{hourlyTemp}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
}
