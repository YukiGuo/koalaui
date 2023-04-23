import React from 'react';
import { alert, Button } from '../../lib/index';
const Alert: React.FunctionComponent = () => {
  const fn = () => {
    alert({
      title: 'alert',
    });
  };
  return (
    <>
      <Button onClick={fn} type="primary">
        {' '}
        alert
      </Button>
      <p>利用 alter方法</p>
    </>
  );
};
export default Alert;
