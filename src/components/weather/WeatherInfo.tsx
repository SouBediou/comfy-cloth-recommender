import React from "react";
import { WeatherData } from "@/utils/weatherApi";

interface WeatherInfoProps {
  weather: WeatherData;
  city: string;
}

export const WeatherInfo = ({ weather, city }: WeatherInfoProps) => (
  <div className="flex items-center justify-between mb-6">
    <div>
      <h2 className="text-3xl font-bold mb-2">{weather.temperature}°C</h2>
      <p className="text-lg capitalize mb-1">{weather.condition}</p>
      <p className="text-lg text-[#000000]">{city}</p>
    </div>
    <img 
      src={weather.icon} 
      alt={weather.condition} 
      className="w-20 h-20"
    />
  </div>
);