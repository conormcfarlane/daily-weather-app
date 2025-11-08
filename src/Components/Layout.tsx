import Header from "./Header";
import SearchBar from "./SearchBar";
import CurrentForecast from "./CurrentForecast";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

export default function Layout() {
  return (
    <div className=" bg-(--color-neutral-900-hsl) grid grid-cols-[1fr_calc(100%-2rem)_1fr] pt-4 md:grid-cols-[1fr_calc(100%-3rem)_1fr] md:pt-6 lg:grid-cols-[1fr_1216px_1fr] pb-20 ">
      <div className="col-start-2 space-y-8 ">
        <Header />
        <div>
          <h1 className="text-center text-(length:--fs-52) md:max-w-[13ch] mx-auto lg:max-w-none  ">
            How's the sky looking today ?
          </h1>
        </div>
        <SearchBar />
        <div className="space-y-8 lg:grid lg:grid-cols-[70%_1fr] gap-8 ">
          <div className="space-y-8 lg:h-full lg:flex lg:flex-col lg:justify-between">
            <CurrentForecast />
            <DailyForecast />
          </div>
          <div>
            <HourlyForecast />
          </div>
        </div>
      </div>
    </div>
  );
}
