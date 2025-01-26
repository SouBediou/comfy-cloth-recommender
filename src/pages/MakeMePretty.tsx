import React from "react";
import { Layout } from "@/components/Layout";

const MakeMePretty = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Make Me
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-[#c451c9]">
            Pretty
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default MakeMePretty;