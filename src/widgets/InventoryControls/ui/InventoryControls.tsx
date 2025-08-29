import { useState } from "react";
import { useInventoryStore } from "@/features/InventoryTable/model/inventory-store";
import { getMockItems } from "@/features/InventoryTable/model/getMockItems";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/components/select";

import { Button } from "@/shared/ui/components/button";

export const InventoryControls = () => {
  const [selectedItemId, setSelectedItemId] = useState("");
  const addItem = useInventoryStore((state) => state.addItem);

  const items = getMockItems();

  const handleAddItem = () => {
    const itemToAdd = items.find((item) => item.id === selectedItemId);
    if (itemToAdd) {
      addItem(itemToAdd);
      setSelectedItemId("");
    }
  };

  const handleValueChange = (value: string) => {
    setSelectedItemId(value);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mb-6">
      <h2 className="text-lg font-medium text-gray-900 mb-3">Add Items</h2>
      <div className="flex flex-col sm:flex-row gap-3">
        <Select value={selectedItemId} onValueChange={handleValueChange}>
          <SelectTrigger className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <SelectValue placeholder="Выберите предмет" />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                {item.name} ({item.weight} kg)
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          onClick={handleAddItem}
          disabled={!selectedItemId}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-md transition-colors duration-200"
        >
          Add Item
        </Button>
      </div>
    </div>
  );
};
