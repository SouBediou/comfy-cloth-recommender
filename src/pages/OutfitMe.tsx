import React from "react";
import { Layout } from "@/components/Layout";

const OutfitMe = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-[#dcd7d7]">Outfit</span>{" "}
            <span className="text-[#c451c9]">Me</span>
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default OutfitMe;