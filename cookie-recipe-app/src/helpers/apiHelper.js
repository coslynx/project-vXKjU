const axios = require('axios');

const API_KEY = 'your_api_key_here';

const getRecipes = async (ingredients, dietaryRestrictions, cookieType) => {
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredients}&diet=${dietaryRestrictions}&type=${cookieType}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching recipes: ${error.message}`);
  }
};

const getRecipeDetails = async (recipeId) => {
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching recipe details: ${error.message}`);
  }
};

const getNutritionalInfo = async (recipeId) => {
  try {
    const response = await axios.get(`https://api.edamam.com/api/nutrition-data?app_id=your_app_id_here&app_key=your_app_key_here&ingr=${recipeId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching nutritional information: ${error.message}`);
  }
};

const uploadImage = async (image) => {
  try {
    const formData = new FormData();
    formData.append('file', image);

    const response = await axios.post('https://api.cloudinary.com/v1_1/your_cloud_name_here/image/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    
    return response.data.url;
  } catch (error) {
    throw new Error(`Error uploading image: ${error.message}`);
  }
};

module.exports = {
  getRecipes,
  getRecipeDetails,
  getNutritionalInfo,
  uploadImage
};