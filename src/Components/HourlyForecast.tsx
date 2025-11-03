import iconSunny from "../assets/images/icon-sunny.webp";

export default function HourlyForecast() {
  const hourlyForecastCards = [
    { weatherCode: 1, timeHour: "6", timeShort: "PM", temp: 20 },
    { weatherCode: 2, timeHour: "2", timeShort: "PM", temp: 20 },
    { weatherCode: 1, timeHour: "2", timeShort: "PM", temp: 20 },
    { weatherCode: 1, timeHour: "2", timeShort: "PM", temp: 20 },
    { weatherCode: 1, timeHour: "2", timeShort: "PM", temp: 20 },
    { weatherCode: 1, timeHour: "2", timeShort: "PM", temp: 20 },
    { weatherCode: 1, timeHour: "2", timeShort: "PM", temp: 20 },
    { weatherCode: 1, timeHour: "2", timeShort: "PM", temp: 20 },
    { weatherCode: 1, timeHour: "2", timeShort: "PM", temp: 20 },
    { weatherCode: 1, timeHour: "2", timeShort: "PM", temp: 20 },
    { weatherCode: 1, timeHour: "2", timeShort: "PM", temp: 20 },
    { weatherCode: 1, timeHour: "2", timeShort: "PM", temp: 20 },
    { weatherCode: 1, timeHour: "2", timeShort: "PM", temp: 20 },
    { weatherCode: 1, timeHour: "2", timeShort: "PM", temp: 20 },
    { weatherCode: 1, timeHour: "2", timeShort: "PM", temp: 20 },
  ];
  return (
    <section className="bg-(--color-neutral-800-hsl) rounded-xl px-4 py-6 space-y-4 lg:max-h-172 lg:overflow-y-auto">
      <div className="flex justify-between">
        <h2>Hourly forecast</h2>
        <select
          name="dayOfWeek"
          id=""
          className="bg-(--color-neutral-600-hsl) px-4 py-2 rounded-xl"
        >
          <option value="">Tuesday</option>
          <option value="">Wednesday</option>
        </select>
      </div>
      <div className="grid grid-row-auto gap-4">
        {hourlyForecastCards.map((card,index) => {
          return (
            <div key={index} className="flex justify-between items-center px-4 py-2.5 bg-(--color-neutral-700-hsl)  rounded-xl">
              <div className="flex text-(length:--fs-20) items-center">
                <img src={iconSunny} alt="" className="w-10 h-10" />
                <div className="flex gap-2">
                  <p>{card.timeHour} </p>
                  <p>{card.timeShort}</p>
                </div>
              </div>
              <p>{card.temp}&deg;</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
