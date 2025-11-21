import React from "react";

export default function Skeleton({ variant = "default", className = "" }) {
  const variants = {
    // Rectangular placeholder
    default: "h-4 w-full",

    // Current forecast card
    currentForecast: "h-48 w-full",

    // Small weather stat card
    weatherCard: "h-32 w-full",

    // Hourly forecast item
    hourlyItem: "h-16 w-full",

    // Daily forecast card
    dailyCard: "h-24 w-full",

    // Circle (for icons/avatars)
    circle: "h-12 w-12 rounded-full",

    // Text line (short)
    text: "h-4 w-3/4",

    // Text line (full width)
    textFull: "h-4 w-full",
  };

  return (
    <div
      className={`
        bg-(--color-neutral-700-hsl)
        rounded-xl
        ${variants[variant] || variants.default}
        ${className}
      `}
    />
  );
}
