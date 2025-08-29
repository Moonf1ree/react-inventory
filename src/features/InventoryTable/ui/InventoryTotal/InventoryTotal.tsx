import { useMemo } from "react";
import { useInventoryStore } from "../../model/inventory-store";

export const InventoryTotal = () => {
  const items = useInventoryStore((state) => state.items);

  const { totalQuantity, totalWeight } = useMemo(() => {
    const qty = items.reduce((total, item) => total + item.quantity, 0);
    const weight = items.reduce(
      (total, item) => total + item.weight * item.quantity,
      0
    );
    return { totalQuantity: qty, totalWeight: weight };
  }, [items]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mt-4">
      <div className="grid grid-cols-2 gap-4 text-lg">
        <div>
          <span className="font-medium text-gray-700">Всего предметов:</span>
          <span className="ml-2 font-bold text-blue-600">{totalQuantity}</span>
        </div>
        <div>
          <span className="font-medium text-gray-700">Общий вес:</span>
          <span className="ml-2 font-bold text-blue-600">{totalWeight} kg</span>
        </div>
      </div>
    </div>
  );
};
