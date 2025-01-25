import React, { useEffect, useState } from "react";
import { getWeather, WeatherData } from "@/utils/weatherApi";
import { useToast } from "@/components/ui/use-toast";
import { WeatherSearch } from "./weather/WeatherSearch";
import { WeatherInfo } from "./weather/WeatherInfo";
import { WeatherStats } from "./weather/WeatherStats";
import { WeatherSkeleton } from "./weather/WeatherSkeleton";

export const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("Paris");
  const [inputCity, setInputCity] = useState("Paris");
  const { toast } = useToast();

  const fetchWeatherData = async (cityName: string) => {
    setLoading(true);
    try {
      const data = await getWeather(cityName);
      setWeather(data);
      setCity(cityName);
      toast({
        title: "Météo mise à jour",
        description: `Les données météo pour ${cityName} ont été mises à jour.`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de récupérer les données météo pour cette ville.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCity.trim()) {
      fetchWeatherData(inputCity.trim());
    }
  };

  if (loading) {
    return <WeatherSkeleton />;
  }

  if (!weather) return null;

  return (
    <div className="space-y-4">
      <WeatherSearch 
        inputCity={inputCity}
        setInputCity={setInputCity}
        handleSubmit={handleSubmit}
      />

      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-8">
        <WeatherInfo weather={weather} city={city} />
        <WeatherStats weather={weather} />
      </div>
    </div>
  );
};