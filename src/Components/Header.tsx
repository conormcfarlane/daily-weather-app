import React from "react";
import logo from "../assets/images/logo.svg";
import iconUnits from "../assets/images/icon-units.svg";
import iconDropDown from "../assets/images/icon-dropdown.svg"

export default function Header() {
  return (
    <section className="flex justify-between">
      <img src={logo} alt="site logo" className="w-33 h-10"/>
      <div className="flex items-center gap-2.5  bg-(--color-neutral-800-hsl) px-4 py-2 rounded-xl ">
        <img src={iconUnits} alt="dropdown logo" className="w-3.5 h-3.5"/>
        <p className="text-white">Units</p>
        <img src={iconDropDown} alt="dropdown image" />
      </div>
    </section>
  );
}
