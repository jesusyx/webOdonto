import React, { Component } from 'react';


class Odontograma extends Component {
	render() {
		return (
			<div className="uprofile-content">
				<div className="form-group">
	          <h1 className="uilabels text-lg"><span className="label label-primary shadow">Tratamientos</span></h1>
	          <select className="form-control" name="tratamiento" required>
	              <option>Fractura</option>
	              <option>Restauracion</option>
	              <option>Borrar</option>
	              <option>Extraccion</option>
	              <option>Puente</option>
	          </select>
	      </div>
				<center><img src={require('../../../assets/images/odonto.png')} className="img-responsive" /></center>
			</div>
		);
	}
}
export default Odontograma