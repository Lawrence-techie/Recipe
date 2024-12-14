// src/components/RecipeCard.js
import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <h3>{recipe.title}</h3>
      <img src={recipe.image} alt={recipe.title} />
      <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">View Recipe</a>
    </div>
  );
};

export default RecipeCard;
