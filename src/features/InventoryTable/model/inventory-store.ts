import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { findItemIndex } from "../../../entities/item/lib/utils";
import type { IInventoryStore } from "./types";

export const useInventoryStore = create<IInventoryStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (newItem) =>
        set((state) => {
          const itemIndex = findItemIndex(state.items, newItem.id);

          if (itemIndex > -1) {
            const updatedItems = [...state.items];
            updatedItems[itemIndex] = {
              ...updatedItems[itemIndex],
              quantity: updatedItems[itemIndex].quantity + 1,
            };
            return { items: updatedItems };
          }

          return { items: [...state.items, { ...newItem, quantity: 1 }] };
        }),

      increaseQuantity: (id) =>
        set((state) => {
          const itemIndex = findItemIndex(state.items, id);
          if (itemIndex === -1) return state;

          const updatedItems = [...state.items];
          updatedItems[itemIndex] = {
            ...updatedItems[itemIndex],
            quantity: updatedItems[itemIndex].quantity + 1,
          };
          return { items: updatedItems };
        }),

      decreaseQuantity: (id) =>
        set((state) => {
          const itemIndex = findItemIndex(state.items, id);
          if (itemIndex === -1) return state;

          const updatedItems = [...state.items];
          if (updatedItems[itemIndex].quantity > 1) {
            updatedItems[itemIndex] = {
              ...updatedItems[itemIndex],
              quantity: updatedItems[itemIndex].quantity - 1,
            };
          } else {
            updatedItems.splice(itemIndex, 1);
          }
          return { items: updatedItems };
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      hasItems: () => {
        return get().items.length > 0;
      },
    }),
    {
      name: "inventory-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
