var React = require('react');

var Layout = React.createClass({
	render: function render() {
		var bodyClass = this.props.modalType ? 'modal-open' : '';

		return (
			<html>
			<head>
				<title>{this.props.title}</title>
				<link rel="stylesheet" href="/stylesheets/bootstrap.css"></link>
				<link rel="stylesheet" href="/stylesheets/style.css"></link>
				<script src="/javascripts/jquery.js"></script>
				<script src="/javascripts/bootstrap.js"></script>
			</head>
			<body className={bodyClass}>
				{this.props.children}
			</body>
			</html>
		);
	}
});

module.exports = Layout;
