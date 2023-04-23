import React from 'react';
import { classes } from '../tools/classes';
import './tree.scss';
import TreeItem from './TreeItem';

const className = classes('koala-tree');

const Tree: React.FC<TreeProps> = (props) => {
  const onItemChange = (value: any) => {
    if (props.onChange) {
      props.onChange(Array.from(new Set(value)));
    }
  };
  return (
    <div className={className('')}>
      {props.treeData.map((ele) => (
        <TreeItem
          item={ele}
          treeProps={props}
          onItemChange={onItemChange}
          key={ele.value}
        />
      ))}
    </div>
  );
};
export default Tree;
