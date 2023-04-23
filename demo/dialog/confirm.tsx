import React from 'react';
import { Button, confirm } from '../../lib/index';
const Confirm: React.FunctionComponent = () => {
  const fn = () => {
    confirm({
      title: '提示',
      content: '确认提交此数据？',
    });
  };
  return (
    <>
      <Button onClick={fn} type="primary">
        {' '}
        confirm
      </Button>
      <p>利用 confirm 方法</p>
    </>
  );
};
export default Confirm;
