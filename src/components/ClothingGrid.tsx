import React from "react";
import { ClothingCard } from "./ClothingCard";
import { getClothingItems } from "@/utils/storage";

export const ClothingGrid = () => {
  const items = getClothingItems();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <ClothingCard key={item.id} item={item} />
      ))}
    </div>
  );
};