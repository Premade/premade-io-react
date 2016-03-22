module.exports = function(app) {

	var Item = require('./../models/Item.js');

	app.get('/api/items', function(req, res) {
		Item.find(function(error, doc){
			res.send(doc);
		})
	}).post('/api/items', function(req, res) {
		var item = new Item(req.body);
		item.save(function(err, data){
			res.status('300').send();
		})
	}).delete('/api/items/:id', function(req, res){
		var item = Item.remove({
			_id: req.params.id
		}, function(err){
			if (err) return handleError(err);
		});
	}).patch('/api/items/:id', function(req, res){
		Item.findOne({
			_id: req.body._id
		}, function(error, doc){
			for (var key in req.body) {
				doc[key] = req.body[key]
			}
			doc.save();
			res.status('200').send();
		})
	});
}