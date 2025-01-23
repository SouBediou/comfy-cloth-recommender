import React, { useState, useEffect } from "react";
import { UploadForm } from "@/components/UploadForm";
import { ClothingGrid } from "@/components/ClothingGrid";
import { WeatherWidget } from "@/components/WeatherWidget";
import { RecommendationCard } from "@/components/RecommendationCard";
import { getClothingItems } from "@/utils/storage";
import { getRecommendations } from "@/utils/recommendations";
import { getWeather } from "@/utils/weatherApi";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Index = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [context, setContext] = useState("casual");

  useEffect(() => {
    const loadRecommendations = async () => {
      try {
        const weather = await getWeather("Paris");
        const items = getClothingItems();
        const recommended = getRecommendations(items, weather, context);
        setRecommendations(recommended);
      } catch (error) {
        console.error("Erreur lors du chargement des recommandations:", error);
      }
    };

    loadRecommendations();
  }, [context]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-4">LookinGood</h1>
        <p className="text-gray-600 mb-8">Votre assistant vestimentaire intelligent</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Section Météo et Recommandations */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Votre ville ?</h2>
              <WeatherWidget />
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Mood du jour</h2>
                <div className="grid grid-cols-2 gap-4">
                  <ToggleGroup type="single" value={context} onValueChange={(value) => value && setContext(value)} className="grid grid-cols-1 gap-4">
                    <ToggleGroupItem value="bureau" className="flex-1 bg-[#9b87f5] text-white hover:bg-[#8b77e5] h-24 rounded-lg">
                      Bureau & Meeting
                    </ToggleGroupItem>
                    <ToggleGroupItem value="entretien" className="flex-1 bg-[#F97316] text-white hover:bg-[#e96305] h-24 rounded-lg">
                      Entretien
                    </ToggleGroupItem>
                    <ToggleGroupItem value="relax" className="flex-1 bg-[#0EA5E9] text-white hover:bg-[#0d94d8] h-24 rounded-lg">
                      Relax & Week-end
                    </ToggleGroupItem>
                    <ToggleGroupItem value="ceremonie" className="flex-1 bg-[#33C3F0] text-white hover:bg-[#22b2df] h-24 rounded-lg">
                      Cérémonie & Cocktail
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <ToggleGroup type="single" value={context} onValueChange={(value) => value && setContext(value)} className="grid grid-cols-1 gap-4">
                    <ToggleGroupItem value="night" className="flex-1 bg-[#F2FCE2] text-gray-800 hover:bg-[#e2ecD2] h-24 rounded-lg">
                      Night & Party
                    </ToggleGroupItem>
                    <ToggleGroupItem value="crush" className="flex-1 bg-[#FEC6A1] text-gray-800 hover:bg-[#eeb691] h-24 rounded-lg">
                      Crush & Date
                    </ToggleGroupItem>
                    <ToggleGroupItem value="ecole" className="flex-1 bg-[#accbee] text-gray-800 hover:bg-[#9cbbde] h-24 rounded-lg">
                      École
                    </ToggleGroupItem>
                    <ToggleGroupItem value="restaurant" className="flex-1 bg-[#d299c2] text-gray-800 hover:bg-[#c289b2] h-24 rounded-lg">
                      Restaurant
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </div>
              <RecommendationCard items={recommendations} />
            </div>

            {/* Visualisation des tenues */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Flashez votre dressing</h2>
              <ClothingGrid />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Look recommandé</h2>
            <UploadForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;