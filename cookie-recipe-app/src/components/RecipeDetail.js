import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeDetail = ({ recipeId }) => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`API_ENDPOINT/${recipeId}`);
        setRecipe(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipe:', error);
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (loading) {
    return <div>Loading recipe...</div>;
  }

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <p>Prep Time: {recipe.prepTime} minutes</p>
      <p>Cook Time: {recipe.cookTime} minutes</p>
      <p>Servings: {recipe.servings}</p>
    </div>
  );
};

export default RecipeDetail;