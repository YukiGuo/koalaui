import React, { useState } from 'react';
import { Button, Dialog } from '../../lib/index';

const Mask: React.FunctionComponent = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const openDialog = () => {
    setVisible(true);
  };
  const onOk = () => {
    setVisible(false);
  };
  const onCancel = () => {
    setVisible(false);
  };
  return (
    <div>
      <Button onClick={openDialog} type="primary">
        {' '}
        打开对话框
      </Button>
      <p>点击蒙层是不允许许关闭 </p>
      <Dialog
        visible={visible}
        title="提示"
        onCancel={onCancel}
        onOk={onOk}
        maskClosable={false}
      >
        <p>这是第一段话</p>
        <p>这是第二段话</p>
      </Dialog>
    </div>
  );
};
export default Mask;
