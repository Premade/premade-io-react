var React = require('react');
var Item = require('./Item.jsx');
var AddItem = require('./AddItem.jsx');

module.exports = React.createClass({
	render: function () {
		return (
			<div>
				{
					this.props.items.map(function(item, index){
						return (<Item item={item} key={'item' + index}/>);
					})
				}
				<AddItem />
			</div>
		);
	}
});