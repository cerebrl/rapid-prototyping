var React = require('react'),
	Layout = require('./layout');

var Error = React.createClass({
	render: function render() {
		return (
			<Layout title={this.props.title}>
				<div className="content">
					<h1>{this.props.message}</h1>
					<h2>{this.props.error.status}</h2>
					<pre>{this.props.error.stack}</pre>
				</div>
			</Layout>
		);
	}
});

module.exports = Error;
