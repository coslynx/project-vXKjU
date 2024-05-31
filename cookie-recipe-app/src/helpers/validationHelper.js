const validateRecipe = (recipe) => {
    if (!recipe || typeof recipe !== 'object') {
        throw new Error('Recipe data is invalid');
    }

    if (!recipe.name || typeof recipe.name !== 'string' || recipe.name.trim() === '') {
        throw new Error('Recipe name is required');
    }

    if (!recipe.ingredients || !Array.isArray(recipe.ingredients) || recipe.ingredients.length === 0) {
        throw new Error('Recipe must have at least one ingredient');
    }

    if (!recipe.instructions || !Array.isArray(recipe.instructions) || recipe.instructions.length === 0) {
        throw new Error('Recipe must have step-by-step instructions');
    }

    if (recipe.photo && (typeof recipe.photo !== 'string' || recipe.photo.trim() === '')) {
        throw new Error('Invalid photo URL');
    }
};

module.exports = {
    validateRecipe,
};