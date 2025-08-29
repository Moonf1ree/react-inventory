import { useInventoryStore } from "../../model/inventory-store";
import { calculateTotalWeight } from "../../../../entities/item/lib/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/components/table";
import { Button } from "@/shared/ui/components/button";

export const InventoryTable = () => {
  const items = useInventoryStore((state) => state.items);
  const increaseQuantity = useInventoryStore((state) => state.increaseQuantity);
  const decreaseQuantity = useInventoryStore((state) => state.decreaseQuantity);
  const removeItem = useInventoryStore((state) => state.removeItem);

  return (
    <Table>
      <TableHeader>
        <TableHead>Картинка</TableHead>
        <TableHead>Название</TableHead>
        <TableHead>Количество</TableHead>
        <TableHead>Вес</TableHead>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <img
                src={item.icon}
                alt={item.name}
                className="w-10 h-10 object-contain"
              />
            </TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>{calculateTotalWeight(item)} kg</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Button onClick={() => decreaseQuantity(item.id)}>-</Button>
                <Button onClick={() => increaseQuantity(item.id)}>+</Button>
                <Button onClick={() => removeItem(item.id)}>Remove</Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
