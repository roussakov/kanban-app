import React from 'react';
import styles from './Button.css';

export interface ButtonProps {
  children: React.ReactNode
}

export const Button = ({ children }: ButtonProps): React.ReactNode => {
  return <button className={styles.button}>{children}</button>;
};
