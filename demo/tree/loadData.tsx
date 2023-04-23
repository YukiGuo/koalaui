import React, { useState } from 'react';
import { Tree } from '../../lib/index';

const Basic: React.FunctionComponent = () => {
  const [value, setValue] = useState([]);
  const change = (a) => {
    setValue(a);
  };
  const [treeData, setTreeData] = useState([
    {
      label: '北京',
      value: '1',
    },
    {
      label: '上海',
      value: '2',
      children: [
        {
          label: '闵行',
          value: '2-1',
        },
        {
          label: '浦东',
          value: '2-2',
        },
      ],
    },
  ]);

  const getData = () => {
    return [
      {
        label: '测试1',
        value: Math.random() * 10 + '',
      },
      {
        label: '测试3',
        value: Math.random() * 10 + '',
      },
      {
        label: '测试3',
        value: Math.random() * 10 + '',
      },
    ];
  };
  const update = (list, key, children) => {
    return list.map((node) => {
      if (node.value === key) {
        const a = {
          ...node,
          children,
        };
        return a;
      }
      if (node.children) {
        const a = update(node.children, key, children);

        return {
          ...node,
          children: a,
        };
      }
      return node;
    });
  };

  const loadData = (item) => {
    const a = update([...treeData], item.value, getData());
    setTreeData(a);
  };
  return (
    <div>
      <p>选程加载数据</p>
      <p>选中值： {value.join(' /')}</p>
      <Tree
        treeData={treeData}
        value={value}
        loadData={loadData}
        checkable
        multiple
        onChange={change}
      ></Tree>
    </div>
  );
};
export default Basic;
