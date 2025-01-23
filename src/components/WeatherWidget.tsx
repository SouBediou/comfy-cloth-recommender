import React, { useEffect, useState } from "react";
import { getWeather, WeatherData } from "@/utils/weatherApi";

export const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWeather("Paris")
      .then(setWeather)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6 animate-pulse">
        <div className="h-8 bg-blue-400/50 rounded w-24 mb-2"></div>
        <div className="h-4 bg-blue-400/50 rounded w-32"></div>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-3xl font-bold">{weather.temperature}°C</h2>
          <p className="text-lg capitalize">{weather.condition}</p>
        </div>
        <img 
          src={weather.icon} 
          alt={weather.condition} 
          className="w-20 h-20"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="opacity-75">Ressenti</p>
          <p className="font-semibold">{weather.feelsLike}°C</p>
        </div>
        <div>
          <p className="opacity-75">Humidité</p>
          <p className="font-semibold">{weather.humidity}%</p>
        </div>
        <div>
          <p className="opacity-75">Vent</p>
          <p className="font-semibold">{weather.windSpeed} km/h</p>
        </div>
      </div>
    </div>
  );
};