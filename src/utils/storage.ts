export interface ClothingItem {
  id: string;
  image: string;
  type: string;
  color: string;
  occasion: string;
}

const STORAGE_KEY = "wardrobe_items";

export function saveClothingItem(item: ClothingItem): void {
  const items = getClothingItems();
  items.push(item);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function getClothingItems(): ClothingItem[] {
  const items = localStorage.getItem(STORAGE_KEY);
  return items ? JSON.parse(items) : [];
}