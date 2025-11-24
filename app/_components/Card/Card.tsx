import React from 'react';
import styles from './Card.module.scss';

type CardProps = {
  children?: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      data-class='card-component'
      className={`${styles.cardContainer} ${className ? className : ''}`}
    >
      {children}
    </div>
  );
};

export default Card;