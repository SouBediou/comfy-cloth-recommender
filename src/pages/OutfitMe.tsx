import React from "react";
import { Layout } from "@/components/Layout";
import { WeatherWidget } from "@/components/WeatherWidget";
import { MoodSection } from "@/components/MoodSection";

const OutfitMe = () => {
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
              {[
                'Bureau & Meeting',
                'Entretien',
                'Relax & Week-end',
                'Cérémonie & Cocktail',
                'Night & Party',
                'Crush & Date'
              ].map(event => (
                <button
                  key={event}
                  className="bg-[#81017d] text-white p-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  {event}
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