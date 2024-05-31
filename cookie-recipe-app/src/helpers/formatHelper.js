const formatHelper = {
  formatRecipeIngredients: (ingredients) => {
    // Logic to format recipe ingredients
    return ingredients.map((ingredient) => {
      return `${ingredient.quantity} ${ingredient.unit} ${ingredient.name}`;
    });
  },

  formatRecipeInstructions: (instructions) => {
    // Logic to format recipe instructions
    return instructions.map((instruction, index) => {
      return `${index + 1}. ${instruction}`;
    });
  },

  formatRecipeTime: (time) => {
    // Logic to format recipe time
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours} hours ${minutes} minutes`;
  },

  formatNutritionalInfo: (nutrients) => {
    // Logic to format nutritional information
    return nutrients.map((nutrient) => {
      return `${nutrient.name}: ${nutrient.amount} ${nutrient.unit}`;
    });
  },

  calculateServings: (recipe, servings) => {
    // Logic to calculate ingredient quantities based on servings
    const ratio = servings / recipe.servings;
    return recipe.ingredients.map((ingredient) => {
      return {
        name: ingredient.name,
        quantity: ingredient.quantity * ratio,
        unit: ingredient.unit
      };
    });
  }
};

module.exports = formatHelper;