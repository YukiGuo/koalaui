import React, { MouseEventHandler } from 'react';
import './style/mask.scss';

interface MaskProps {
  onClick?: MouseEventHandler;
}
const Mask: React.FunctionComponent<MaskProps> = (props) => {
  return <div className="koala-dialog-mask" onClick={props.onClick}></div>;
};
export default Mask;
