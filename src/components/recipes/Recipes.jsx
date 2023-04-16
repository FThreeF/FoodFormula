import React, { useState } from 'react';
import cl from './Recipes.module.css';
import Recipe from '../recipe/Recipe';

const Recipes = () => {
  const [recipes, setRecipes] = useState([
    { id: 0, image: '', title: 'One', text: 'onaosda' },
    { id: 1, image: '', title: 'One', text: 'onaosda' },
    { id: 2, image: '', title: 'Ondsae', text: 'onaosda' },
    { id: 2, image: '', title: 'Ondsae', text: 'onaosda' },
    { id: 2, image: '', title: 'Ondsae', text: 'onaosda' },
  ]);

  return (
    <div className={cl.recipes}>
      {recipes.map((el) => (
        <Recipe recipe={el} />
      ))}
    </div>
  );
};

export default Recipes;
