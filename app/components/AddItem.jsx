var React = require('react');
var action = require('./../actions/Actions.jsx');

module.exports = React.createClass({
	getInitialState: function(){
		return {
			input: ""
		}
	},
	handelInput: function(e){
		this.setState({
			input: e.target.value
		});
	},
	addItem: function(e){
		e.preventDefault();
		// console.log('add ' + this.state.input);
		action.add({
			name: this.state.input
		});

		this.setState({
			input: ""
		});
	},
	render: function (){
		return (
			<div>
				<form onSubmit={this.addItem}>
					<input value={this.state.input} onChange={this.handelInput}/>
					<button>Add Item</button>
				</form>
			</div>
		);
	}
});