import React, { useState, useEffect } from "react";
import { UploadForm } from "@/components/UploadForm";
import { ClothingGrid } from "@/components/ClothingGrid";
import { WeatherWidget } from "@/components/WeatherWidget";
import { RecommendationCard } from "@/components/RecommendationCard";
import { getClothingItems } from "@/utils/storage";
import { getRecommendations } from "@/utils/recommendations";
import { getWeather } from "@/utils/weatherApi";

const Index = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const loadRecommendations = async () => {
      try {
        const weather = await getWeather("Paris");
        const items = getClothingItems();
        const recommended = getRecommendations(items, weather, "casual");
        setRecommendations(recommended);
      } catch (error) {
        console.error("Erreur lors du chargement des recommandations:", error);
      }
    };

    loadRecommendations();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8">Ma Garde-robe Intelligente</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <WeatherWidget />
            <div className="mt-8">
              <RecommendationCard items={recommendations} />
            </div>
            <div className="mt-8">
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