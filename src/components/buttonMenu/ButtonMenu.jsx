import React from 'react';
import cl from './ButtonMenu.module.css';
import MyText from '../UI/myText/MyText';

const ButtonMenu = ({ active, ...props }) => {
  return (
    <button {...props} className={cl.buttonMenu}>
      <div className={[cl.arrow, active && cl.active].join(' ')}></div>
    </button>
  );
};

export default ButtonMenu;
