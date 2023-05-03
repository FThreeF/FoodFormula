import React from 'react';
import MyText from '../UI/myText/MyText';
import cl from './Recipe.module.css';

const Recipe = ({ recipe, setLike, setRecipe }) => {
  return (
    <div className={cl.recipe}>
      <img
        src={recipe.image}
        onClick={() => setRecipe(true, recipe)}
        className={cl.image}
      ></img>
      <div className={cl.group}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div
            onClick={() => setLike(recipe)}
            className={[cl.button, recipe.like && cl.active].join(' ')}
          ></div>
          <MyText className={cl.title} active>
            {recipe.title}
          </MyText>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
