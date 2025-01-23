import React, { useEffect, useState } from "react";
import { getWeather, WeatherData } from "@/utils/weatherApi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

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
    return (
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6 animate-pulse">
        <div className="h-8 bg-blue-400/50 rounded w-24 mb-2"></div>
        <div className="h-4 bg-blue-400/50 rounded w-32"></div>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Entrez une ville..."
          className="bg-white/90"
        />
        <Button type="submit" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </form>

      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-3xl font-bold">{weather.temperature}°C</h2>
            <p className="text-lg capitalize">{weather.condition}</p>
            <p className="text-sm opacity-75">{city}</p>
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
    </div>
  );
};