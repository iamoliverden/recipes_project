// Categories.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import Recipes from './Recipes';
import './Categories.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/categories/')
      .then(response => {
        const sortedCategories = response.data.sort((a, b) => a.name.localeCompare(b.name));
        setCategories(sortedCategories);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    setSelectedRecipe(null); // Reset selected recipe when category changes
  };

  const handleRecipeSelect = (recipeId) => {
    setSelectedRecipe(recipeId);
  };

  const categoryOptions = categories.map(category => ({
    value: category.id,
    label: category.name
  }));

  return (
    <div className="categories-container">
      <Select
        options={categoryOptions}
        onChange={handleCategoryChange}
        placeholder="Select Category"
        className="category-select"
      />
      {selectedCategory && (
        <Recipes
          categoryId={selectedCategory.value}
          selectedRecipe={selectedRecipe}
          onRecipeSelect={handleRecipeSelect}
        />
      )}
    </div>
  );
};

export default Categories;
