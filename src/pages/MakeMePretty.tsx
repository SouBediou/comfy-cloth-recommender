import React from "react";
import { Layout } from "@/components/Layout";
import { LocationSection } from "@/components/LocationSection";
import { MoodSection } from "@/components/MoodSection";

const MakeMePretty = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-8 p-4">
        <div className="text-white">
          <h1 className="text-4xl">Outfit</h1>
          <h2 className="text-[#81017d] text-3xl">Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            <section className="bg-[#1B172C] rounded-lg p-6">
              <h2 className="text-white text-xl mb-4">Spot du jour</h2>
              <LocationSection />
            </section>

            <section className="bg-[#1B172C] rounded-lg p-6">
              <h2 className="text-white text-xl mb-4">Mood du jour</h2>
              <MoodSection />
            </section>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            <section className="bg-[#1B172C] rounded-lg p-6 h-[300px]">
              <h2 className="text-white text-xl mb-4">My Shape</h2>
              <div className="h-48 flex items-center justify-center text-gray-400">
                Contenu à venir
              </div>
            </section>

            <section className="bg-[#1B172C] rounded-lg p-6 h-[300px]">
              <h2 className="text-white text-xl mb-4">Actu tendances</h2>
              <div className="h-48 flex items-center justify-center text-gray-400">
                Contenu à venir
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MakeMePretty;