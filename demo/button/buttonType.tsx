import React from 'react';
import Button from '../../lib/button/button';
const ButtonType: React.FunctionComponent = () => {
  const Span = <span style={{ width: '16px', display: 'inline-block' }}></span>;
  return (
    <div>
      <Button>default </Button>
      {Span}
      <Button type="primary">primary </Button>
      {Span}
      <Button type="text">text </Button>
      {Span}
      <Button type="success">success </Button>
      {Span}
      <Button type="warning">warning </Button>
    </div>
  );
};
export default ButtonType;
