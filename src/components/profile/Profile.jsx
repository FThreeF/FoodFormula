import React from 'react';
import cl from './Profile.module.css';
import MyText from '../UI/myText/MyText';

const Profile = () => {
  return (
    <div className={cl.profile}>
      <div className={cl.block}>
        <div className={cl.avatar}></div>
        <MyText>m.a.k.s.e.m</MyText>
      </div>
    </div>
  );
};

export default Profile;
