// Recipes.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeDetail from './RecipeDetail';
import './Recipes.css';

const Recipes = ({ categoryId, selectedRecipe, onRecipeSelect }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/categories/${categoryId}/`)
      .then(response => setRecipes(response.data.recipes))
      .catch(error => console.error(error));
  }, [categoryId]);

  const handleRecipeClick = (recipeId) => {
    onRecipeSelect(recipeId);
  };

  return (
    <div className="recipes-container">
      {selectedRecipe ? (
        <div className="recipe-detail-wrapper">
          <RecipeDetail recipeId={selectedRecipe} />
        </div>
      ) : (
        <>
          <h2>Recipes</h2>
          <div className="recipes-grid">
            {recipes.map(recipe => (
              <div key={recipe.id} className="recipe-card" onClick={() => handleRecipeClick(recipe.id)}>
                <img src={recipe.image} alt={recipe.dish_name} className="recipe-image" />
                <div className="recipe-info">
                  <h3>{recipe.dish_name}</h3>
                  <p>{recipe.description}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Recipes;
