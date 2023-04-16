import React from 'react';
import cl from './MyLink.module.css';
import { Link } from 'react-router-dom';

const MyLink = ({ children, active, href, ...props }) => {
  return (
    <Link {...props} to={href} className={[cl.myLink, active && cl.active].join(' ')}>
      {children}
    </Link>
  );
};

export default MyLink;
