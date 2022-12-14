import React, { FC } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => (
  <div className={styles.Container}>{children}</div>
);

export default Container;
