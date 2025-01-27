import React from "react";
import { Layout } from "@/components/Layout";

const OutfitMe = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">
          Outfit
          <br />
          <span className="text-[#c451c9]">Me</span>
        </h1>
      </div>
    </Layout>
  );
};

export default OutfitMe;