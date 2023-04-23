import React, { useState } from 'react';
import { Button, Dialog } from '../../lib/index';

const Alert: React.FunctionComponent = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const openDialog = () => {
    setVisible(true);
  };
  const onOk = () => {
    console.log('确认');
    setVisible(false);
  };
  const onCancel = () => {
    console.log('取消');
    setVisible(false);
  };
  return (
    <div>
      <Button onClick={openDialog} type="primary">
        {' '}
        打开对话框
      </Button>

      <p>基础对话框</p>
      <Dialog visible={visible} title="提示" onCancel={onCancel} onOk={onOk}>
        <p>这是第一段话</p>
        <p>这是第二段话</p>
      </Dialog>
    </div>
  );
};
export default Alert;
