import React from "react";
import { ClothingItem } from "@/utils/storage";

interface ClothingCardProps {
  item: ClothingItem;
}

export const ClothingCard = ({ item }: ClothingCardProps) => {
  return (
    <div className="clothing-card">
      <img
        src={item.image}
        alt={`${item.type} ${item.color}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-medium">{item.type}</h3>
        <p className="text-sm text-gray-500">
          {item.color} • {item.occasion}
        </p>
      </div>
    </div>
  );
};