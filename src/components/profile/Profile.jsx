import React, { useState } from 'react';
import cl from './Profile.module.css';
import MyText from '../UI/myText/MyText';
import Autorization from '../autorization/Autorization';

const Profile = ({ status, setStatus, countRecipe, profile, setProfile }) => {





  return (
    <div className={cl.profile}>
      <Autorization setStatus={setStatus} status={status} setProfile={setProfile} />
      <div className={cl.block}>
        <div className={cl.avatar}></div>
        <MyText active>{profile.name}</MyText>
      </div>
      <div className={cl.group}>
        <div className={cl.line}>
          <MyText>Почта</MyText>
          <MyText active>{profile.email}</MyText>
        </div>
        <div className={cl.line}>
          <MyText>Любимыйх рецептов</MyText>
          <MyText active>{countRecipe ? countRecipe : 0}</MyText>
        </div>
      </div>
      {(profile.name == 'none') && <button onClick={() => setStatus(true)} className={cl.button} setProfile={setProfile} >Авторизация</button>}   
      {(profile.name != 'none') && <button onClick={() => setProfile({name: 'none', email: 'none'})} className={cl.button} setProfile={setProfile} >Выход</button>}    
      {(profile.name == 'none') && <MyText>Авторизуйтесь чтобы сохранить ваши данные</MyText>}
    </div>
  );
};

export default Profile;
