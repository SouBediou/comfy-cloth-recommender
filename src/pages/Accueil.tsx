import React from "react";
import { Layout } from "@/components/Layout";
import { LocationSection } from "@/components/LocationSection";
import { MoodSection } from "@/components/MoodSection";

const Accueil = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold text-[#D946EF] text-center mt-16 mb-12">
        My Lookin'Good
      </h1>
      <LocationSection />
      <MoodSection />
    </Layout>
  );
};

export default Accueil;