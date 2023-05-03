import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({ children, ...props }) => {
  return (
    <div {...props} className={cl.myModal}>
      {children}
    </div>
  );
};
