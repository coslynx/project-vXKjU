const express = require('express');
const router = express.Router();

// Import shopping list controller
const shoppingListController = require('../controllers/shoppingListController');

// Route to get shopping list based on selected recipes
router.get('/shopping-list', shoppingListController.getShoppingList);

module.exports = router;