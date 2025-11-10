import { useState } from "react";
import iconSearch from "../assets/images/icon-search.svg";
import { useWeatherApi } from "../Hooks/useWeatherApi";

export default function SearchBar() {

  const [queryValue, setQueryValue] = useState<string>("Berlin");
  const [inputValue, setInputValue] = useState<string>("");
  const handleInputSearch = () => {
    setQueryValue(inputValue);
  };
  return (
    <section className="flex flex-col gap-3 md:flex-row lg:max-w-5/10 lg:mx-auto">
      <div className="flex bg-(--color-neutral-800-hsl) px-6 py-4 rounded-xl gap-4 md:min-w-8/10">
        <img src={iconSearch} alt="search icon" className="cursor-pointer" />
        <input
          type="text"
          placeholder="Search for a place"
          className="text-(length:--fs-20) font-semibold"
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
        />
      </div>
      <button
        className="bg-(--color-blue-500-hsl) text-(length:--fs-20) font-medium text-center py-4 rounded-xl w-full cursor-pointer"
        onClick={handleInputSearch}
      >
        Search
      </button>
    </section>
  );
}
