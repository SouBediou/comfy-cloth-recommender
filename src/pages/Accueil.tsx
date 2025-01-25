import React from "react";
import { Layout } from "@/components/Layout";
import { LocationSection } from "@/components/LocationSection";
import { MoodSection } from "@/components/MoodSection";

const Accueil = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-[#D946EF] text-center mt-16 mb-12">
          Make Me Pretty
        </h1>
        
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          <LocationSection />
          <MoodSection />
        </div>
      </div>
    </Layout>
  );
};

export default Accueil;