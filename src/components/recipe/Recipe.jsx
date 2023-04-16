import React from 'react';
import cl from './Recipe.module.css';
import MyText from '../UI/myText/MyText';

const Recipe = ({ recipe }) => {
  return (
    <div className={cl.recipe}>
      <div className={cl.image}></div>
      <div className={cl.group}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div className={cl.button}></div>
          <MyText active>{recipe.title}</MyText>
        </div>
        <MyText>{recipe.text}</MyText>
      </div>
    </div>
  );
};

export default Recipe;
