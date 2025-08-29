import type { IItemProps } from "@/entities/model/types";

const AVAILABLE_ITEMS: IItemProps[] = [
  { id: "1", name: "Iron Sword", icon: "🗡️", weight: 2.5 },
  { id: "2", name: "Wooden Shield", icon: "🛡️", weight: 3.0 },
  { id: "3", name: "Health Potion", icon: "🧪", weight: 0.5 },
  { id: "4", name: "Copper Axe", icon: "🪙", weight: 4 },
  { id: "5", name: "Magic Ring", icon: "💍", weight: 0.25 },
];

export const getMockItems = (): IItemProps[] => {
  return AVAILABLE_ITEMS;
};
