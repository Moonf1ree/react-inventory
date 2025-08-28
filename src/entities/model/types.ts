export interface IItemProps {
  id: string;
  name: string;
  icon: string;
  weight: number;
}

export interface IItemInInventoryProps extends IItemProps {
  quantity: number;
}
