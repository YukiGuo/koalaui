import React, { SVGAttributes } from 'react';
import mergeClassName from '../tools/classes';
import './icon.scss';
import './importIcons.js';

interface IconProps extends SVGAttributes<SVGElement> {
  name: string;
}
const Icon: React.FunctionComponent<IconProps> = ({
  className,
  name,
  ...restProps
}) => {
  return (
    <svg
      className={mergeClassName('koala-icon', className)}
      aria-hidden="true"
      {...restProps}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};
export default Icon;
