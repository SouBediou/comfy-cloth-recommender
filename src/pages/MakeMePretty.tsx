import React from "react";
import { Layout } from "@/components/Layout";
import { LocationSection } from "@/components/LocationSection";
import { MoodSection } from "@/components/MoodSection";

const MakeMePretty = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-2 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Outfit
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-[#c451c9]">
            Me
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="rounded-lg bg-white/10 p-6 shadow backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-6 text-white">Spot du jour</h2>
              <LocationSection />
            </div>

            <div className="rounded-lg bg-white/10 p-6 shadow backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-6 text-white">Mood du jour</h2>
              <MoodSection />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="rounded-lg bg-white/10 p-6 shadow backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-6 text-white">My Shape</h2>
              {/* Shape content will be implemented later */}
              <div className="h-48 flex items-center justify-center text-white/60">
                Contenu à venir
              </div>
            </div>

            <div className="rounded-lg bg-white/10 p-6 shadow backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-6 text-white">Actu tendances</h2>
              {/* Trends content will be implemented later */}
              <div className="h-48 flex items-center justify-center text-white/60">
                Contenu à venir
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MakeMePretty;