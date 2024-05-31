# Cookie Recipe App

## Overview

The cookie recipe app is designed to provide users with a wide variety of cookie recipes to choose from. Users can search for recipes based on ingredients, dietary restrictions, or type of cookies. Each recipe includes a list of ingredients, step-by-step instructions, and a photo of the finished product. Users can save their favorite recipes to a personalized recipe box for easy access. The app also allows users to create a shopping list based on the ingredients needed for selected recipes. Nutritional information for each recipe is provided to help users make informed choices. Users can rate and review recipes to share their experience with others. The app offers a feature that allows users to adjust serving sizes to automatically calculate ingredient quantities. Additionally, the app suggests complementary recipes based on the user's saved favorites and allows users to upload their own cookie recipes to share with the community. The user-friendly interface with easy navigation and visually appealing design enhances the overall user experience.

## Technology Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js
- Database: MongoDB

## APIs

- Spoonacular API for retrieving cookie recipes based on user preferences and dietary restrictions.
- Edamam API for providing nutritional information for each recipe.
- Cloudinary API for handling image uploads and storage for user-generated recipes.

## Packages and Libraries

- Express.js (latest version) for building the backend server and handling HTTP requests.
- Mongoose (latest version) for interacting with the MongoDB database.
- React (latest version) for building the frontend user interface.
- Axios (latest version) for making API calls from the frontend.
- Bootstrap (latest version) for creating a responsive and visually appealing design.

## Rationale

Node.js was chosen for the backend due to its asynchronous nature, which is ideal for handling multiple requests in real-time. MongoDB was selected as the database for its flexibility and scalability, allowing easy storage and retrieval of recipe data. React was chosen for the frontend to create a dynamic and interactive user interface. Express.js was chosen for its simplicity and efficiency in building RESTful APIs. Bootstrap was selected to ensure a responsive design that looks good on all devices.

By utilizing these technologies and APIs, the cookie recipe app offers a seamless user experience with a wide range of features to cater to the needs of cookie enthusiasts.