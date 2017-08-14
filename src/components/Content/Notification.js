import React, { Component } from 'react';

class Notification extends Component {
	render() {
		return (
			<div className="alert alert-success alert-dismissible fade in">
      	<button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
        <strong>Hecho! : </strong>Los datos del paciente se han guardado con éxito.
      </div>
		);
	}
}
export default Notification
