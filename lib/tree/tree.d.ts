interface ItemProps {
  target: any;
  value: string;
  children?: ItemProps[];
  label: string;
  isLeaf?: boolean;
}
type valueBsicType = number | string;
type valueType = valueBsicType | valueBsicType[];
interface TreeProps {
  treeData: ItemProps[];
  value?: valueType;
  multiple?: boolean;
  checkable?: boolean;
  autoSelect?: boolean;
  onChange?: (value: valueType) => void;
  loadData?: (item: ItemProps) => void;
}
