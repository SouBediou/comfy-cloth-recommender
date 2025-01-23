import React from "react";
import { ClothingItem } from "@/utils/storage";

interface RecommendationCardProps {
  items: ClothingItem[];
}

export const RecommendationCard = ({ items }: RecommendationCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Look recommandé</h2>
      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.id} className="clothing-card">
            <img
              src={item.image}
              alt={item.type}
              className="w-full h-32 object-cover"
            />
            <div className="p-2">
              <p className="text-sm font-medium">{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};