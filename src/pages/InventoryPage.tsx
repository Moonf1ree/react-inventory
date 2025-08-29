import { useInventoryStore } from "@/features/InventoryTable/model/inventory-store";
import { InventoryTable } from "@/features/InventoryTable/ui/InventoryTable/InventoryTable";
import { InventoryTotal } from "@/features/InventoryTable/ui/InventoryTotal/InventoryTotal";
import { InventoryControls } from "@/widgets/InventoryControls/ui/InventoryControls";

export const InventoryPage = () => {
  const hasItems = useInventoryStore((state) => state.hasItems());

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container m-auto px-4 max-w-6xl">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Игровой инвентарь
          </h1>
          <p className="text-gray-600">Ваши предметы и снаряжение</p>
        </header>
        <InventoryControls />
        {hasItems ? (
          <div>
            <InventoryTable />
            <InventoryTotal />
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <div className="text-gray-400 text-6xl mb-4">🎒</div>
            <h2 className="text-xl font-medium text-gray-700 mb-2">
              Ваш инвентарь пуст
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};
