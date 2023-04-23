import React, { useState } from 'react';
import { Tree } from '../../lib/index';

const Basic: React.FunctionComponent = () => {
  const [value, setValue] = useState([]);
  const change = (a) => {
    setValue(a);
  };
  const [treeData] = useState([
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
          children: [
            {
              label: '闵行1',
              value: '2-1-1',
            },
            {
              label: '闵行2',
              value: '2-1-2',
            },
            {
              label: '闵行3',
              value: '2-1-3',
            },
          ],
        },
        {
          label: '浦东',
          value: '2-2',
        },
      ],
    },
  ]);
  return (
    <div>
      <p>多选 自动选中子项</p>
      <p>选中值： {value.join(' /')}</p>

      <Tree
        treeData={treeData}
        value={value}
        onChange={change}
        multiple
        autoSelectChildren
        checkable
      ></Tree>
    </div>
  );
};
export default Basic;
