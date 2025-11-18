import Header from "./Header";
import SearchBar from "./SearchBar";
import CurrentForecast from "./CurrentForecast";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

export default function Layout() {
  return (
    <div className=" bg-(--color-neutral-900-hsl) pt-4 pb-20 px-5 md:px-6 min-h-screen ">
      <div className="col-start-2 space-y-8 max-w-[1216px] mx-auto ">
        <Header />
        <div>
          <h1 className="text-center text-(length:--fs-52) max-w-[13ch] mx-auto lg:max-w-none  ">
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
