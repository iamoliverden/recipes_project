// RecipeDetail.js


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RecipeDetail.css';

const RecipeDetail = ({ recipeId }) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/recipes/${recipeId}/`)
      .then(response => setRecipe(response.data))
      .catch(error => console.error(error));
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  const cookingMethodSteps = recipe.cooking_method.split('\n').map((step, index) => (
    <div key={index}>{step}</div>
  ));

  return (
    <div className="recipe-detail-container">
      <h2 className="recipe-detail-title">{recipe.dish_name}</h2>
      <img src={recipe.image} alt={recipe.dish_name} className="recipe-detail-image" />
      <p className="recipe-detail-description"><strong>Description:</strong> {recipe.description}</p>
      <p className="recipe-detail-ingredients"><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <div className="recipe-detail-method"><strong>Cooking Method:</strong> {cookingMethodSteps}</div>
    </div>
  );
};

export default RecipeDetail;
