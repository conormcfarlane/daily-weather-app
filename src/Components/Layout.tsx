import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import CurrentForecast from "./CurrentForecast";

export default function Layout() {
  return (
    <div className="bg-(--color-neutral-900-hsl) grid grid-cols-[1fr_calc(100%-2rem)_1fr] pt-4">
      <div className="col-start-2 space-y-8">
        <Header />
        <div>
          <h1 className="text-center text-(length:--fs-52) ">
            How's the sky looking today ?
          </h1>
        </div>
        <SearchBar />
        <CurrentForecast />
      </div>
    </div>
  );
}
