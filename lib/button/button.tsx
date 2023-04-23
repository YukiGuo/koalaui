import React, { HTMLAttributes } from 'react';
import mergeClassName from '../tools/classes';
import './button.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: 'default' | 'primary' | 'text' | 'success' | 'warning';
  size?: 'middle' | 'small' | 'large';
  loading?: string;
  icon?: ReactNode;
  disabled?: boolean;
}
const Button: React.FunctionComponent<ButtonProps> = ({
  type = 'default',
  size = 'middler',
  children,
  ...restProps
}) => {
  // eslint-disable-next-line react/button-has-type
  return (
    <button
      className={mergeClassName(
        'koala-button',
        `koala-${type}-button`,
        `koala-${size}-button`,
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};
export default Button;
