import React, { FC } from 'react'
import './card.scss'

export const Card: FC<any> = ({className, ...props}) => {
  return <div className={`Card ${className}`} {...props} />;
};
