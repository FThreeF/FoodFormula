import React from 'react';
import cl from './MyText.module.css';

const MyText = ({ children, active, ...props }) => {
  return (
    <p className={[cl.myText, active && cl.active].join(' ')} {...props} >{children}</p>
  );
};

export default MyText;
