import React from "react";
import { Layout } from "@/components/Layout";
import { WeatherWidget } from "@/components/WeatherWidget";
import { Briefcase, Users, Sun, Wine, PartyPopper, Heart } from "lucide-react";

const OutfitMe = () => {
  const moodButtons = [
    { text: 'Bureau & Meeting', icon: <Briefcase className="w-5 h-5" /> },
    { text: 'Entretien', icon: <Users className="w-5 h-5" /> },
    { text: 'Relax & Week-end', icon: <Sun className="w-5 h-5" /> },
    { text: 'Cérémonie & Cocktail', icon: <Wine className="w-5 h-5" /> },
    { text: 'Night & Party', icon: <PartyPopper className="w-5 h-5" /> },
    { text: 'Crush & Date', icon: <Heart className="w-5 h-5" /> }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Outfit
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-[#c451c9]">
              Me
            </h1>
          </div>

          <div className="bg-[#1B172C] rounded-lg p-6">
            <h2 className="text-white text-xl mb-4">Spot du jour</h2>
            <WeatherWidget />
          </div>

          <div className="bg-[#1B172C] rounded-lg p-6">
            <h2 className="text-white text-xl mb-4">Mood du jour</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {moodButtons.map(({ text, icon }) => (
                <button
                  key={text}
                  className="bg-[#81017d] text-white p-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  {icon}
                  {text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OutfitMe;