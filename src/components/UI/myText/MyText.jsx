import React from 'react';
import cl from './MyText.module.css';

const MyText = ({ children, className, active, ...props }) => {
  return (
    <p className={[cl.myText, className, active && cl.active].join(' ')} {...props} >{children}</p>
  );
};

export default MyText;
