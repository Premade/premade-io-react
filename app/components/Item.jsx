var React = require('react');
var action = require('./../actions/Actions.jsx');

module.exports = React.createClass({
	delete: function(e) {
		e.preventDefault();
		action.delete(this.props.item);
	},
	render: function () {
		return (
			<div>
				{this.props.item.name}
				<form onSubmit={this.delete}>
					<button>delete</button>
				</form>
			</div>
		);
	}
});