import React from 'react';
import cl from './MyLogo.module.css';

const MyLogo = ({ ...props }) => {
  return (
    <div {...props} className={cl.myLogo}>
      FF
    </div>
  );
};

export default MyLogo;
