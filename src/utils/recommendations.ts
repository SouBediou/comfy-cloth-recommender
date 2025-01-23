import { ClothingItem } from "./storage";
import { WeatherData } from "./weatherApi";

export function getRecommendations(
  items: ClothingItem[],
  weather: WeatherData,
  occasion: string
): ClothingItem[] {
  // Logique simple de recommandation basée sur la température et l'occasion
  const isWarm = weather.temperature > 20;

  return items.filter((item) => {
    if (item.occasion !== occasion) return false;
    
    // Recommandations basiques selon la température
    if (isWarm && ["manteau", "pull"].includes(item.type)) return false;
    if (!isWarm && ["t-shirt", "short"].includes(item.type)) return false;
    
    return true;
  });
}