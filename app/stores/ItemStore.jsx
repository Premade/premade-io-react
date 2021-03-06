var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/RestHelper.js');

function ItemStore() {
	var items = [];

	helper.get('/api/items').then(function(data){
		items = data;
		triggerListeners();
	});
	
	var listeners = [];

	function getItems() {
		return items;
	};
	function addItem(item) {
		items.push(item);
		triggerListeners();
		helper.post('/api/items', item);
	};
	function deleteItem(item) {
		var index;
		items.filter(function(_item, _index){
			if (_item.name === item.name) {
				index = _index;
			}
		});
		items.splice(index,1);
		triggerListeners();
		helper.del('/api/items/' + item._id);
	};
	function onChange(listener) {
		listeners.push(listener);
	};

	function triggerListeners(){
		listeners.forEach(function(listener){
			listener(items);
		});
	};
	dispatcher.register(function(event){
		var split = event.type.split(':');
		if (split[0] === 'item') {
			switch (split[1]){
				case "add":
				addItem(event.payload);
				break;
				case "delete":
				deleteItem(event.payload);
				break;
			}
		}
	});
	return {
		getItems: getItems,
		onChange: onChange
	}
}

module.exports = new ItemStore();