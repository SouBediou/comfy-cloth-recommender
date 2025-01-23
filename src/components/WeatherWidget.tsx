import React, { useEffect, useState } from "react";
import { getWeather, WeatherData } from "@/utils/weatherApi";

export const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    getWeather("Paris")
      .then(setWeather)
      .catch(console.error);
  }, []);

  if (!weather) return null;

  return (
    <div className="weather-widget">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{weather.temperature}°C</h2>
          <p className="text-sm opacity-90">{weather.condition}</p>
        </div>
        <img src={weather.icon} alt={weather.condition} className="w-16 h-16" />
      </div>
    </div>
  );
};