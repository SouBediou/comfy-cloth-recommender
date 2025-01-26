import React from "react";
import { Layout } from "@/components/Layout";

const Closet = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="block text-white">My Closet</span>
          <span className="block text-[#c451c9]">Paradise</span>
        </h1>
        {/* Content will be added later */}
      </div>
    </Layout>
  );
};

export default Closet;