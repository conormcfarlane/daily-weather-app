import iconDrizzle from "../assets/images/icon-drizzle.webp";

export default function DailyForecast() {
  const dailyForecastCrads = [
    { titleDay: "Tue", weatherCode: 3, maxTemp: 23, minTemp: 3 },
    { titleDay: "Wed", weatherCode: 3, maxTemp: 23, minTemp: 3 },
    { titleDay: "Thur", weatherCode: 3, maxTemp: 23, minTemp: 3 },
    { titleDay: "Fri", weatherCode: 3, maxTemp: 23, minTemp: 3 },
    { titleDay: "Sat", weatherCode: 3, maxTemp: 23, minTemp: 3 },
    { titleDay: "Sun", weatherCode: 3, maxTemp: 23, minTemp: 3 },
    { titleDay: "Mon", weatherCode: 3, maxTemp: 23, minTemp: 4 },
  ];
  return (
    <section className="space-y-5">
      <h2>Daily forecast</h2>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-7">
        {dailyForecastCrads.map((card) => {
          return (
            <div
              key={card.titleDay}
              className="bg-(--color-neutral-800-hsl) px-2.5 py-4 flex flex-col rounded-xl"
            >
              <p className="text-center text-(length:--fs-18) font-medium">
                {card.titleDay}
              </p>
              <img src={iconDrizzle} alt="" className="w-15 self-center" />
              <div className="flex justify-between w-full text-(length:--fs-16) font-light ">
                <p className="">{card.maxTemp}&deg;</p>
                <p>{card.minTemp}&deg;</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
