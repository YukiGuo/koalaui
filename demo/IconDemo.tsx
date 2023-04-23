import React from 'react';
import Icon from '../lib/icon/Icon';
const fn: React.MouseEventHandler<Element> = (e) => {
  console.log(e.target);
  console.log((e.target as SVGUseElement).href);
};
const IconExample: React.FunctionComponent = () => {
  return (
    <div>
      <Icon name="add" className="icon1" onClick={fn}></Icon>
      <Icon name="close" className="icon2"></Icon>
      <Icon name="location"></Icon>
    </div>
  );
};
export default IconExample;
