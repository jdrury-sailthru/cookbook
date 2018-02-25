var express = require('express');
var router = express.Router();

var recipeController = require('../controllers/recipe-controller');
var mongoose = require('mongoose');
var Recipe = mongoose.model('Recipe');

router.get('/', recipeController.home);
router.get('/recipes', recipeController.getRecipes);

router.get('/add', recipeController.addRecipe);
router.post('/add', recipeController.createRecipe);

router.get('/recipes/:id/edit', recipeController.editRecipe);
router.post('/recipes/:id/update', recipeController.updateRecipe);
router.post('/recipes/:id/delete', recipeController.deleteRecipe);

module.exports = router;
