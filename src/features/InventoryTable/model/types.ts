import type { IItemInInventoryProps, IItemProps } from "@/entities/model/types";

export interface IInventoryStore {
  items: IItemInInventoryProps[];
  addItem: (newItem: IItemProps) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeItem: (id: string) => void;
  hasItems: () => boolean;
}
