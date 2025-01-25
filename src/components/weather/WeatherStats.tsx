import React from "react";
import { WeatherData } from "@/utils/weatherApi";

interface WeatherStatsProps {
  weather: WeatherData;
}

export const WeatherStats = ({ weather }: WeatherStatsProps) => (
  <div className="grid grid-cols-3 gap-8 text-center">
    <div className="bg-white/10 rounded-lg p-4">
      <p className="text-sm opacity-75 mb-1">Ressenti</p>
      <p className="text-xl font-semibold">{weather.feelsLike}°C</p>
    </div>
    <div className="bg-white/10 rounded-lg p-4">
      <p className="text-sm opacity-75 mb-1">Humidité</p>
      <p className="text-xl font-semibold">{weather.humidity}%</p>
    </div>
    <div className="bg-white/10 rounded-lg p-4">
      <p className="text-sm opacity-75 mb-1">Vent</p>
      <p className="text-xl font-semibold">{weather.windSpeed} km/h</p>
    </div>
  </div>
);