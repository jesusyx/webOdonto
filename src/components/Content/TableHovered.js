import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

function searchingFor(term2){
  return function(x){
    if (x.ApellidoPaterno.toLowerCase().includes(term2.toLowerCase())) {
      return true
    }
    else if (x.ApellidoMaterno.toLowerCase().includes(term2.toLowerCase())) {
      return true
    }
    else if (x.Nombres.toLowerCase().includes(term2.toLowerCase())) {
      return true
    }
    else if (x.DNI.toString().toLowerCase().includes(term2.toLowerCase())) {
      return true
    }
  }
}
class TableHovered extends Component {
	constructor(props){
		super(props)
	this.state = {key:null}

    }
    

    handleDelete(id){
        this.setState({
            key:id
        })
    }

    handleConfirm(){
        this.props.removes(this.state.key)
    }

	render() {
		return (
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="padding-div-input margin-bottom ">
                        <Link to='/AgregarPaciente' className="btn btn-primary" onClick={this.props.handleChangeredirect}><span className="glyphicon glyphicon-user"></span>+ Agregar Nuevo Paciente</Link>
                    </div>
                    
                    <div className="col-xs-12 col-md-3  padding-div-input input-group primary">
                        <span className="input-group-addon">
                            
                            <i className="fa fa-search"></i>
                        </span>
                        <input onChange={this.props.whenEscribes} type="search" className="form-control" placeholder="Buscar Paciente"/>    
                    </div>

            	<div className="table-responsive">


                    

                    

                    


                {/*Modal Content*/}
                                
                                    <div className="modal fade shadow" id="ultraModal-2" tabIndex="-1" role="dialog" aria-labelledby="ultraModal-Label" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                    <h4 className="modal-title">Confirma Eliminar</h4>
                                                </div>
                                                <div className="modal-body">

                                                    ¿Seguro que Quieres Eliminar Este paciente?

                                                </div>
                                                <div className="modal-footer">
                                                    <button data-dismiss="modal" className="btn btn-default shadow" type="button">Cerrar</button>
                                                    <button data-dismiss="modal" className="btn btn-danger shadow"   type="button" onClick={this.handleConfirm.bind(this)}>Eliminar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                {/*End Modal content*/}
                
                
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Apellido Paterno</th>
                            <th>Apellidos Materno</th>
                            <th>Nombres</th>
                            <th>DNI</th>
                            <th>Celular</th>
                            <center><th>Acciones</th></center>
                        </tr>
                    </thead>
                    <tbody>
                      {this.props.messages.filter(searchingFor(this.props.term)).map(mg => {

                    	return (


                            <tr key={mg.id}>

    							<th scope="row">{mg.id}</th>
    							<td>{mg.ApellidoPaterno}</td>
                                <td>{mg.ApellidoMaterno}</td>
    							<td>{mg.Nombres}</td>
    							<td>{mg.DNI}</td>
    							<td>{mg.Celular}</td>

                                <center><td className="btn-group" role="group">


                                    <Link to="/PerfilPaciente/Presupuestos" data-tip="VerPaciente" onClick={() => this.props.handleView(mg)} className="btn-marginRight btn btn-primary facebook shadow"><i className="fa fa-list"></i><span> </span></Link>

                                    <Link to="/EditarPaciente" data-tip="Editar" onClick={() => this.props.handleEdit(mg)} className="btn-marginRight btn btn-info shadow"><i className="fa fa-edit"></i><span> </span></Link>

                                    <button className="btn-marginRight btn btn-danger shadow" data-tip="Eliminar"  href="#ultraModal-2" onClick={() => this.handleDelete(mg.id)} data-toggle="modal"><i className="fa fa-remove"></i><span> </span></button>
                                    
                                    <ReactTooltip/>
                                </td></center>

                    		</tr>
                            )

                    	})}
                    </tbody>
                </table>
               </div>
            </div>
        </div>
		);
	}
}
export default TableHovered