const API_KEY = "YOUR_API_KEY"; // À remplacer par une clé valide

export interface WeatherData {
  temperature: number;
  condition: string;
  icon: string;
}

export async function getWeather(city: string): Promise<WeatherData> {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();
    
    return {
      temperature: Math.round(data.main.temp),
      condition: data.weather[0].main,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };
  } catch (error) {
    console.error("Erreur lors de la récupération de la météo:", error);
    throw error;
  }
}