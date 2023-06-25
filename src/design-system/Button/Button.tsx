import React from 'react';

export interface ButtonProps {
  children: React.ReactNode
}

export const Button = ({ children }: ButtonProps): React.ReactNode => {
  return <button className="bg-black">{children}</button>;
};
