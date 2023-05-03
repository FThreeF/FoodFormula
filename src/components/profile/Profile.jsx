import React, { useState } from 'react';
import cl from './Profile.module.css';
import MyText from '../UI/myText/MyText';
import Autorization from '../autorization/Autorization';

const Profile = ({countRecipe}) => {

  const [profile, setProfile] = useState({name: 'none', email: 'none'});

  return (
    <div className={cl.profile}>
      <Autorization setProfile={setProfile} />
      <div className={cl.block}>
        <div className={cl.avatar}></div>
        <MyText active>none</MyText>
      </div>
      <div className={cl.group}>
        <div className={cl.line}>
          <MyText>Почта</MyText>
          <MyText active>none</MyText>
        </div>
        <div className={cl.line}>
          <MyText>Любимыйх рецептов</MyText>
          <MyText active>{countRecipe ? countRecipe : 0}</MyText>
        </div>
      </div>
      <button className={cl.button}>Авторизация</button>
      <MyText>Авторизуйтесь чтобы сохранить ваши данные</MyText>
    </div>
  );
};

export default Profile;
