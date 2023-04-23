import React from 'react';
import Button from '../../lib/button/button';
const buttonSize: React.FunctionComponent = () => {
  const Span = <span style={{ width: '16px', display: 'inline-block' }}></span>;
  return (
    <div>
      <Button size="small" type="primary">
        small{' '}
      </Button>
      {Span}
      <Button size="middle" type="primary">
        middle{' '}
      </Button>
      {Span}
      <Button size="large" type="primary">
        large{' '}
      </Button>
    </div>
  );
};
export default buttonSize;
