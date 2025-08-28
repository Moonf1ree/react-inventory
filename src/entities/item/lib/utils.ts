import { type IItemInInventoryProps } from "../../model/types";

export const calculateTotalWeight = (item: IItemInInventoryProps): number => {
  return item.weight * item.quantity;
};

export const findItemIndex = (
  items: IItemInInventoryProps[],
  id: string
): number => {
  return items.findIndex((item) => item.id === id);
};
