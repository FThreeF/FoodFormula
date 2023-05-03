import React from 'react';
import cl from './ModalRecipe.module.css';
import MyText from '../UI/myText/MyText';

const ModalRecipe = ({ recipe, active, setStatusRecipe, ...props }) => {
  console.log(recipe.recipe.map((el) => true));

  return (
    <div
      style={{ display: active ? 'flex' : 'none' }}
      className={cl.modalRecipe}
    >
      <button onClick={() => setStatusRecipe(false)} className={cl.button}>
        Закрыть
      </button>
      <MyText active className={cl.title}>
        {recipe.title}
      </MyText>
      <img src={recipe.image} className={cl.image}></img>
      <MyText active>{recipe.text}</MyText>
      <div className={cl.group}>
        {recipe.recipe.map((el, index) => (
          <div className={cl.recipe}>
            <MyText className={cl.textRecipe} active>{`Шаг ${
              index + 1
            } ${el} `}</MyText>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalRecipe;
