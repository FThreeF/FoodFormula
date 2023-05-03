import React, { useState } from 'react';
import cl from './Recipes.module.css';
import Recipe from '../recipe/Recipe';
import MyText from '../UI/myText/MyText';

const Recipes = ({ setLike, recipes, setRecipes, setRecipe }) => {
  return (
    <div className={cl.recipes}>
      {recipes.length ? (
        recipes.map((el) => (
          <Recipe
            key={el.id}
            setLike={setLike}
            recipe={el}
            setRecipe={setRecipe}
          />
        ))
      ) : (
        <div className={cl.block}> 
          <MyText active>У вас пока нет любимых рецептов.</MyText>
        </div>
      )}
    </div>
  );
};

export default Recipes;
