import React, { useState } from 'react';
import { Button, Dialog } from '../../lib/index';

const Customfooter: React.FunctionComponent = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const openDialog = () => {
    setVisible(true);
  };
  const onOk = () => {
    console.log('确认');
    setVisible(false);
  };
  const onSave = () => {
    console.log('保存');
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
        定制footer
      </Button>
      <p>自定义底部</p>
      <Dialog
        visible={visible}
        title="提示"
        footer={[
          <button
            className="canclebutton"
            onClick={onCancel}
            key="cancle"
            type="submit"
          >
            取消
          </button>,
          <button
            className="okbutton"
            onClick={onSave}
            key="save"
            type="submit"
          >
            保存
          </button>,
          <button
            className="okbutton"
            onClick={() => onOk}
            key="ok"
            type="submit"
          >
            提交
          </button>,
        ]}
      >
        <p>这是第一段话</p>
        <p>这是第二段话</p>
      </Dialog>
    </div>
  );
};
export default Customfooter;
