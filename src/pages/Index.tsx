import React from "react";
import { WeatherWidget } from "@/components/WeatherWidget";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { 
  Briefcase, 
  UserRound, 
  Palmtree, 
  GlassWater, 
  Music, 
  Heart,
  MapPin,
  Cloud
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0F0B1E] text-white p-8">
      <div className="container mx-auto">
        <div className="space-y-8">
          {/* Location Section */}
          <section className="bg-[#1A1F2C] rounded-lg p-6 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">LOCALISATION (OÙ SUIS-JE ?)</h2>
            </div>
            <div className="pl-9">
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-semibold">API Météo intégrée</h3>
              </div>
              <div className="mt-4">
                <WeatherWidget />
              </div>
            </div>
          </section>

          {/* Mood Section */}
          <section className="bg-[#1A1F2C] rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">🎯 MOOD DU JOUR</h2>
            <ToggleGroup type="single" className="grid grid-cols-2 gap-4">
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
            </ToggleGroup>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;