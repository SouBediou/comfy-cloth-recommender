import React, { useState, useEffect } from "react";
import { UploadForm } from "@/components/UploadForm";
import { ClothingGrid } from "@/components/ClothingGrid";
import { WeatherWidget } from "@/components/WeatherWidget";
import { RecommendationCard } from "@/components/RecommendationCard";
import { getClothingItems } from "@/utils/storage";
import { getRecommendations } from "@/utils/recommendations";
import { getWeather } from "@/utils/weatherApi";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { Briefcase, UserRound, Palmtree, GlassWater, Music, Heart } from "lucide-react";

const Index = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [context, setContext] = useState("casual");
  const [isStarted, setIsStarted] = useState(false);

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

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-[#0F0B1E] flex flex-col items-center justify-center p-4">
        {/* Logo */}
        <div className="absolute top-6 right-6 w-32">
          <img
            src="/lovable-uploads/77c9682a-32ac-4e9e-aeac-2dd86af684f2.png"
            alt="Lookin'good"
            className="w-full h-auto"
          />
        </div>

        <div className="w-full max-w-md space-y-8 text-center">
          <h1 className="text-5xl font-bold text-white">
            Let's Get{" "}
            <span className="text-[#D946EF] animate-pulse">Started!</span>
          </h1>
          
          <div className="relative w-64 h-64 mx-auto my-12">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D946EF] to-[#8B5CF6] opacity-20 blur-xl rounded-full" />
            <div className="relative">
              <img
                src="/lovable-uploads/2d284ac0-bc9e-49f8-baf6-a5ae06a30340.png"
                alt="Clothes rack"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              onClick={() => setIsStarted(true)}
              className="w-full h-14 text-lg bg-[#D946EF] hover:bg-[#C935DE] transition-colors"
            >
              SIGN IN
            </Button>

            <div className="pt-8 text-gray-400 text-sm">
              DIDN'T HAVE ACCOUNT?{" "}
              <button 
                onClick={() => setIsStarted(true)}
                className="text-[#D946EF] hover:underline"
              >
                SIGN UP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-4">LookinGood</h1>
        <p className="text-gray-600 mb-8">Votre assistant vestimentaire intelligent</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Votre ville ?</h2>
              <WeatherWidget />
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Mood du jour</h2>
                <ToggleGroup type="single" value={context} onValueChange={(value) => value && setContext(value)}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <ToggleGroupItem value="bureau" className="w-full bg-[#9b87f5] text-white hover:bg-[#8b77e5] h-24 rounded-lg flex items-center justify-center gap-2">
                        <Briefcase className="w-6 h-6" />
                        Bureau & Meeting
                      </ToggleGroupItem>
                      <ToggleGroupItem value="entretien" className="w-full bg-[#F97316] text-white hover:bg-[#e96305] h-24 rounded-lg flex items-center justify-center gap-2">
                        <UserRound className="w-6 h-6" />
                        Entretien
                      </ToggleGroupItem>
                      <ToggleGroupItem value="relax" className="w-full bg-[#0EA5E9] text-white hover:bg-[#0d94d8] h-24 rounded-lg flex items-center justify-center gap-2">
                        <Palmtree className="w-6 h-6" />
                        Relax & Week-end
                      </ToggleGroupItem>
                    </div>
                    <div className="space-y-4">
                      <ToggleGroupItem value="ceremonie" className="w-full bg-[#33C3F0] text-white hover:bg-[#22b2df] h-24 rounded-lg flex items-center justify-center gap-2">
                        <GlassWater className="w-6 h-6" />
                        Cérémonie & Cocktail
                      </ToggleGroupItem>
                      <ToggleGroupItem value="night" className="w-full bg-[#F2FCE2] text-gray-800 hover:bg-[#e2ecD2] h-24 rounded-lg flex items-center justify-center gap-2">
                        <Music className="w-6 h-6" />
                        Night & Party
                      </ToggleGroupItem>
                      <ToggleGroupItem value="crush" className="w-full bg-[#FEC6A1] text-gray-800 hover:bg-[#eeb691] h-24 rounded-lg flex items-center justify-center gap-2">
                        <Heart className="w-6 h-6" />
                        Crush & Date
                      </ToggleGroupItem>
                    </div>
                  </div>
                </ToggleGroup>
              </div>
              <RecommendationCard items={recommendations} />
            </div>

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
