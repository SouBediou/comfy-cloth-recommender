export interface WeatherData {
  temperature: number;
  condition: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
}

export async function getWeather(city: string): Promise<WeatherData> {
  // Utiliser une clé API de démonstration pour le développement
  const API_KEY = "9de243494c0b295cca9337e1e96b00e2";
  
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données météo');
    }
    
    const data = await response.json();
    
    return {
      temperature: Math.round(data.main.temp),
      condition: data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed * 3.6), // Conversion en km/h
      feelsLike: Math.round(data.main.feels_like)
    };
  } catch (error) {
    console.error("Erreur lors de la récupération de la météo:", error);
    throw error;
  }
}