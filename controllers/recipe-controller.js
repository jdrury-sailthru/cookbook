var Recipe = require('../models/Recipe');

exports.home = function(req, res) {
    res.render('index', { title: 'Cookbook'});
};

exports.getRecipes = function(req, res) {
    Recipe.find(function (err, recipes) {

        if (err) {
            if (err) console.log(err);
        }

        var title = 'All Recipes';
        res.render('recipes', { title: title, recipes: recipes });
    });
};

exports.addRecipe = function(req, res) {
    var title = 'Add Recipe';
    res.render('addRecipe', { title: title });
};

exports.createRecipe = function(req, res) {
    var recipe = new Recipe(req.body);

    recipe.save(function(err) {
        if (err) {
            console.log(err);
        }

        res.redirect('/recipes');
    })
};

exports.editRecipe = function(req, res) {
    var id = req.params.id;

    Recipe.findOne({ _id: id }, function(err, recipe) {

        if (err) {
            next(err);
            return;
        }

        var title = 'Edit Recipe';

        res.render('editRecipe', {
            title: title,
            recipe: recipe
        });
    });
};

exports.updateRecipe = function(req, res) {
    var name = req.body.name;
    var desc = req.body.desc;
    var id = req.params.id;

    Recipe.findByIdAndUpdate(id, { name: name, desc: desc}, function (err) {
        if (err) return err;
        res.redirect('/recipes');
    });
};

exports.deleteRecipe = function(req, res) {
    var id = req.params.id;

    Recipe.findByIdAndRemove(id, function(err) {
        if (err) return err;
        res.redirect('/recipes');
    });
};
