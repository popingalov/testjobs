import React, { FC } from 'react';
import styles from './Card.module.scss';

interface CardProps {}

const Card: FC<CardProps> = () => (
  <div className={styles.Card}>
    Card Component
  </div>
);

export default Card;
