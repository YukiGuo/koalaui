import React, { useRef, useState } from 'react';
import { classes } from '../tools/classes';
import './tree.scss';
interface treeItemProps {
  item: ItemProps;
  level?: number;
  treeProps: TreeProps;
  onItemChange: (value: valueType) => void;
}
const className = classes('koala-tree-item');
const TreeItem: React.FC<treeItemProps> = (props) => {
  const { item, treeProps } = props;
  const level = props.level || 0;
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  //展开子项
  const expand = () => {
    if (!item.children && treeProps.loadData) {
      treeProps.loadData(item);
    }

    setOpen(true);
  };
  //折叠子项
  const collapse = () => {
    setOpen(false);
  };
  //当前项是否选中
  const isChecked = (item: ItemProps) => {
    if (!treeProps.value) return false;
    if (treeProps.multiple) {
      return (treeProps.value as valueType[]).includes(item.value);
    }
    return item.value === treeProps.value;
  };
  //获取child所有的value
  const getChildrenValue = (item: ItemProps, arr: string[] = []) => {
    if (item.children && item.children.length > 0) {
      item.children.forEach((ele) => {
        arr.push(ele.value);
        getChildrenValue(ele, arr);
      });
    }
  };
  // 两个数组的交集
  const intersection = (firstArr: string[], secondArr: string[]): string[] => {
    const result: string[] = [];
    for (let i = 0; i < firstArr.length; i++) {
      if (secondArr.indexOf(firstArr[i])) {
        result.push(firstArr[i]);
      }
    }
    return result;
  };
  //去重
  const uniq = (arr: string[]) => {
    return Array.from(new Set(arr));
  };

  const onItemChange = (values: string[]) => {
    if (treeProps.autoSelectChildren) {
      const childValue: string[] = [];
      getChildrenValue(item, childValue);
      const common = intersection(values as string[], childValue);
      if (common.length !== 0) {
        props.onItemChange(uniq(values.concat(item.value)));
        inputRef.current!.indeterminate = common.length !== childValue.length;
      } else {
        props.onItemChange(values.filter((v) => v !== item.value));
        inputRef.current!.indeterminate = false;
      }
    } else {
      props.onItemChange(values);
    }
  };
  const onChange = (item: ItemProps, checked: boolean) => {
    if (treeProps.multiple) {
      const values = (treeProps.value as string[]) || [];
      const childValues: string[] = [item.value];
      getChildrenValue(item, childValues);
      const allvalues = uniq([...values, ...childValues]);
      if (checked) {
        if (treeProps.autoSelectChildren) {
          props.onItemChange(allvalues);
        } else {
          props.onItemChange(uniq([...values, item.value]));
        }
      } else {
        if (treeProps.autoSelectChildren) {
          const a = (treeProps.value as string[]).filter(
            (ele) => ele !== item.value && childValues.indexOf(ele) === -1,
          );
          props.onItemChange(a);
        } else {
          props.onItemChange(values.filter((value) => value !== item.value));
        }
      }
    } else if (treeProps.onChange) {
      const value = checked ? item.value : '';
      treeProps.onChange(value);
    }
  };
  const showIcons = () => {
    if (treeProps.loadData) {
      return !item.isLeaf;
    }
    return item.children && item.children.length > 0;
  };
  return (
    <div className={className({ '': true, collapse: !open })} key={item.value}>
      <div className={className('content')}>
        <span
          className={className('indent')}
          style={{ width: `${24 * level}px` }}
        ></span>
        {showIcons() ? (
          open ? (
            <span onClick={collapse} className={className('icon')}>
              {/* <Icon name="close"></Icon> */}-
            </span>
          ) : (
            <span onClick={expand} className={className('icon')}>
              {' '}
              +
            </span>
          )
        ) : null}

        {treeProps.checkable && (
          <input
            type="checkbox"
            checked={isChecked(item)}
            ref={inputRef}
            onChange={(e) => onChange(item, e.target.checked)}
          />
        )}
        {item.label}
      </div>
      {item.children &&
        item.children.map((ele) => (
          <div className={className('children')} key={ele.value}>
            <TreeItem
              item={ele}
              level={level + 1}
              treeProps={treeProps}
              onItemChange={onItemChange}
            ></TreeItem>
          </div>
        ))}
    </div>
  );
};
export default TreeItem;
