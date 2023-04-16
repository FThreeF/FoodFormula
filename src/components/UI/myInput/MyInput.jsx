import React from 'react';
import cl from './MyInput.module.css';

const MyInput = ({ children, ...props }) => {
  return <input className={cl.myInput} {...props} placeholder={children} />;
};

export default MyInput;
