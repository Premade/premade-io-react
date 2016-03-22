var React = require('react');
var ReactDOM = require('react-dom');
var itemStore = require('./stores/ItemStore.jsx');
var List = require('./components/List.jsx');

var data = itemStore.getItems();
function render() {
	ReactDOM.render(<List items={data}/>, document.getElementById('app'));
}
itemStore.onChange(function(items){
	data = items;
	render();
});