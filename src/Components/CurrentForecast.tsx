import React from "react";
import iconSunny from "../assets/images/icon-sunny.webp";
import bgSmall from "../assets/images/bg-today-small.svg";
import bgLarge from "../assets/images/bg-today-large.svg";

export default function () {
  return (
    <section
      className="cureent-forecast px-6 py-11 bg-no-repeat bg-cover bg-center rounded-2xl"
    >
      <div className="text-(length:--fs-28) font-bold text-center">
        <p>Berlin,Germany</p>
        <p className="text-(length:--fs-18) font-medium">
          Tuesday, Aug 5, 2025
        </p>
      </div>
      <div className="flex items-center justify-between">
        <img src={iconSunny} alt="weather code symbol" className="w-30 h-30" />
        <div className="flex text-(length:--fs-96)">
          <p>20</p>
          <span>&deg;</span>
        </div>
      </div>
    </section>
  );
}
