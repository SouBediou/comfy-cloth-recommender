import React from "react";
import { Layout } from "@/components/Layout";
import { WeatherWidget } from "@/components/WeatherWidget";

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
        </div>
      </div>
    </Layout>
  );
};

export default OutfitMe;