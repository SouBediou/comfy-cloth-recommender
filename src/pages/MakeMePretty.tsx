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
            Make Me
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-[#c451c9]">
            Pretty
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <LocationSection />
            <MoodSection />
          </div>
          
          <div className="lg:col-span-1">
            <section className="sticky top-4">
              <h2 className="text-2xl font-semibold mb-4">Love it / Skip it</h2>
              {/* Content for Love it/Skip it will be added later */}
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MakeMePretty;