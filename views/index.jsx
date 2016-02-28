var React = require('react'),
	Layout = require('./layout');

var Index = React.createClass({
	render: function render() {
		var isIn = this.props.modalType ? 'in' : '',
			modalStyle = {
				display: this.props.modalType ? 'block' : 'none'
			},
			triggerModal = this.props.modalType ? '$("#myModal").modal("show");' : '';
		return (
			<Layout {...this.props}>
				<div className="content">
					<h1>Prototyping {this.props.title}</h1>
					<p>Welcome to fast prototyping with real web technology.</p>
					<hr/>

					<button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
						Launch at a glance demo!
					</button>

					<div className={"modal modal_" + this.props.modalType + " fade " + isIn + " fade_" + this.props.modalType}
						 style={modalStyle} id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">

						<div className={"modal-dialog modal-dialog_" + this.props.modalType} role="document">
							<div className={"modal-content modal-content_" + this.props.modalType}>
								<div className={"modal-header modal-header_" + this.props.modalType}>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
									<h4 className="modal-title" id="myModalLabel">Modal title</h4>
								</div>
								<div className="modal-body">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</div>
								<div className={"modal-footer modal-footer_" + this.props.modalType}>
									<button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
									<button type="button" className="btn btn-primary">Continue</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<script dangerouslySetInnerHTML={{__html: triggerModal}} />
			</Layout>
		);
	}
});

module.exports = Index;
