var mongoose = require('mongoose');

var ItemSchema = {
	name: String,
	purchased: Boolean,
	id: String
};

var Item = mongoose.model('Item', ItemSchema, "items");

module.exports = Item;