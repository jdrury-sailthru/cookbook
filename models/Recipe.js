var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Please enter a recipe name!'
    },
    desc: {
        type: String,
        required: 'Please enter a description name!'
    },
    ingredients: {
        type: [String]
    }
});

// recipeSchema.virtual('id').get(function () {
//     return this._id.toHexString();
// });

module.exports = mongoose.model('Recipe', recipeSchema);
