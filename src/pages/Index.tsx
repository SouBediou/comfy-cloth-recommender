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
              <WeatherWidget />
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Filtrer par contexte</h2>
                <ToggleGroup type="single" value={context} onValueChange={(value) => value && setContext(value)}>
                  <ToggleGroupItem value="casual" className="flex-1">
                    Décontracté
                  </ToggleGroupItem>
                  <ToggleGroupItem value="work" className="flex-1">
                    Professionnel
                  </ToggleGroupItem>
                  <ToggleGroupItem value="formal" className="flex-1">
                    Formel
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <RecommendationCard items={recommendations} />
            </div>

            {/* Visualisation des tenues */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Ma Collection</h2>
              <ClothingGrid />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Ajouter un vêtement</h2>
            <UploadForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;