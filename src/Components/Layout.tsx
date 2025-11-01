import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";

export default function Layout() {
  return (
    <div className="bg-(--color-neutral-900-hsl) grid grid-cols-[1fr_calc(100%-2rem)_1fr] pt-4">
      <div className="col-start-2">
        <Header />
        <div>
          <h1 className="text-center text-[calc(52/16*1rem)]  md:text-[calc(96/16*1rem)]">How's the sky looking today ?</h1>
        </div>
        <SearchBar/>
      </div>
    </div>
  );
}
