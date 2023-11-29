import React from 'react';

export interface Props {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button = ({ className, onClick, children }: Props) => {
  return (
    <button
      className={`${className} p-2 w-fit hover:-translate-y-0.5 transition-all`}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
