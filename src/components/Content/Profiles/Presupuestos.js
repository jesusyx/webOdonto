import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'


class CreandoPresupuestos extends Component {
	render() {
		//let totalPresupuesto = this.props.patient.presupuesto.presupuestoItems.map(x=>(x.importe * x.cantidad)).reduce((a, b) => a + b, 0)

		return (
			<div className="uprofile-content">
			{this.props.redirect ? <Redirect to="/PerfilPaciente/Presupuestos"/> : console.log("que verga paso2")}
			<form onSubmit={(event)=>this.props.OnSendtextPresupuestoItems(event, this.props.patient.id)}>
				              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <section className="box  shadow">
                            <header className="panel_header">
                                <h2 className="title pull-left">Presupuesto Nuevo</h2>
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-1">Nombre Del presupuesto</label>
                                                <span className="desc"> Ejm. Presupuesto 1</span>
                                                <div className="controls">
                                                    <input type="text" name="nombrePresupuesto" className="form-control" id="field-1"/>
                                                </div>
                                            </div>
                                            
                                            
                                    </div>
                                </div>
                            </div>
                        </section>
		                        
                       </div>



                    
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                         <section className="box  shadow">
                            <header className="panel_header">
                                <h2 className="title pull-left">Detalles Adicionales</h2>
                            </header>
                            <div className="content-body">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="field-7">Notas del presupuesto</label>
                                    <span className="desc"></span>
                                    <div className="controls">
                                        <textarea name="notasPresupuesto" className="form-control autogrow" cols="5" id="field-7"></textarea>
                                    </div>
                                    <div className="checkbox">
																		  <label>
																		    <input type="checkbox" value=""/>
																		    Presupuesto Aprobado
																		  </label>
																		</div>
                                </div>
                            </div>
                        </section>
                        <div className="box">
                        	<button type="submit" className="btn btn-primary btn-marginRight shadow">Guardar Presupuesto</button>
                        	<button className="btn btn-default shadow">Cancelar</button>
                       	</div>
                    </div>
            </form>
			</div>
		)
	}
}
class VerPresupuesto extends Component {
	render() {
		let subtotal = this.props.presupuestoPatient.presupuestoItems.map(x=>(x.importe * x.cantidad)).reduce((a, b) => a + b, 0)
		return (
			<div className="uprofile-content">
				              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">                        
                            <h2 className="uilabels text-lg">
	                            <span className="label label-default shadow">
	                            	{this.props.presupuestoPatient.nombre}
	                            </span>
                            </h2>                         
                       </div>



                       <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                       <form onSubmit={(event)=>this.props.onSendtextPresupuestoItemsTwo(event, this.props.presupuestoPatient.id)}>
                         <section className="box  shadow">
                            <header className="panel_header">
                                <h2 className="title pull-left">Agregar Items</h2>
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-2">Cantidad</label>
                                                <span className="desc">Ejm. 1</span>
                                                <div className="controls">
                                                    <input type="text" name="cantidad"  className="form-control" id="field-2" data-mask="phone" />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-3">Tratamiento/Prestacion</label>
                                                <span className="desc">Ejm. Resina</span>
                                                <div className="controls">
                                                    <input type="text"  name="tratamiento" className="form-control" id="field-3"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-5">Importe</label>
                                                <span className="desc">Ejm. 220.75</span>
                                                <div className="controls">
                                                    <input type="text"  name="importe" className="form-control" id="field-5"/>
                                                </div>
                                            </div>
                                            <div className="">
										                        	<button type="submit" className="btn btn-primary btn-marginRight shadow">Añadir</button>
										                        	<button className="btn btn-default shadow">Cancelar</button>
										                       	</div>
                                            
                                    </div>
                                </div>
                            </div>
                        </section>
                        </form>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                         <section className="box  shadow">
                            <header className="panel_header">
                                <h2 className="title pull-left">Items en el presupuesto</h2>
                            </header>
                            <div className="content-body">
                                <div className="row">
							                    <div className="col-md-12 col-sm-12 col-xs-12">
							                        <table className="table table-bordered table-striped">
							                            <thead>
							                                <tr>
							                                    <th>Cantidad</th>
							                                    <th>Descripción</th>
							                                    <th>Importe</th>
							                                    
							                                </tr>
							                            </thead>
							                            <tbody>

							                            	{this.props.presupuestoPatient.presupuestoItems.map(mg =>{
							                            		return(
							                            			<tr key={mg.id}>						                                    
							                                    <td>x<b>{mg.cantidad}</b></td>
							                                    <td>{mg.tratamiento}</td>
							                                    <td>S/.{mg.importe * mg.cantidad}</td>
							                                	</tr>
							                            		)
							                            	})}							                               
							                            </tbody>
							                            <thead>
							                                <tr>
							                                    <th colSpan="3"> Recargos y Descuentos</th>
							                                    
							                                    
							                                </tr>
							                                <tr>
							                                    <td colSpan="2">
							                                    Recargo
							                                    	<div className="input-group ">   

																										    <input type="text" className="form-control"/>
																										    <span className="input-group-addon">%</span>
																										</div>

							                                    </td>
							                                    <td>S/.</td>

							                                </tr>
							                                <tr>
							                                    <td colSpan="2">
							                                    <span>Descuento</span>  
							                                    <div className="input-group pull-middle"> 
							                                    			
																										    <input type="text" className="form-control"/>
																										    <span className="input-group-addon">%</span>
																										</div>
							                                    </td>
							                                    <td>S/.</td>

							                                </tr>
							                                <tr className="success">
							                                    <td className="pull-middle" colSpan="2"><span>Subtotal luego de descuentos y recargos:</span></td>
							                                    <td>S/.{subtotal}</td>

							                                </tr>
							                            </thead>
							                        </table>
							                    </div>
			                				</div>
                            </div>
                        </section>
                    </div>
			</div>
		)
	}
}

class ListaDePresupuestos extends Component {
	render() {
		return (
			<div className="col-lg-12 uprofile-content">
			<Link to='/PerfilPaciente/Presupuestos/CrearNuevo' className="btn shadow">Crear</Link>
						
			        <section className="box primary shadow">
			            <header className="panel_header">
			                <h2 className="title pull-left">Lista de presupuestos</h2>
			            </header>
			            <div className="content-body">    
			            <div className="row">
			                    <div className="col-md-12 col-sm-12 col-xs-12">
			                        <table className="table table-bordered table-striped">
			                            <thead>
			                                <tr>
			                                   
			                                    <th>Nombre</th>
			                                    <th>Total</th>
			                                    <th>Acciones</th>
			                                </tr>
			                            </thead>
			                            <tbody>
			                            		{this.props.patient.presupuesto.map(x=>(

																			<tr key={x.id}>
			                                   	
			                                    <td>{x.nombre}</td>
			                                    <td>S/.{x.total}</td>
			                                    <td><Link onClick={() => this.props.handleViewPresupuesto(x)} to="/PerfilPaciente/Presupuestos/VerPresupuesto" className="btn btn-primary"><i className="fa fa-eye"></i>Ver</Link></td>
			                                    
			                                </tr>
			                            		))}			                           
			                                
			                            </tbody>
			                        </table>
			                    </div>
			                </div>
			            </div>
			        </section>
			       
			</div>
		)
	}
}

class Presupuestos extends Component {
	render() {
		return (
			<Router>

			<div className="">
				<Route exact path='/PerfilPaciente/Presupuestos' render={()=>{
					return(
						<ListaDePresupuestos
							patient={this.props.patient}
							handleViewPresupuesto={this.props.handleViewPresupuesto}


						/>
					)
				}}/>
				<Route path='/PerfilPaciente/Presupuestos/CrearNuevo' render={() => {
					return (
						<CreandoPresupuestos
							patient={this.props.patient}
							OnSendtextPresupuestoItems={this.props.OnSendtextPresupuestoItems}
							redirect={this.props.redirect}

						/>
					)
				}}/>

				<Route path="/PerfilPaciente/Presupuestos/VerPresupuesto" render={()=>{
					return(
						<VerPresupuesto
							patient={this.props.patient}
							OnSendtextPresupuestoItems={this.props.OnSendtextPresupuestoItems}
							presupuestoPatient={this.props.presupuestoPatient}
							onSendtextPresupuestoItemsTwo={this.props.onSendtextPresupuestoItemsTwo}				
						/>
					)
				}}/>
			</div>

			</Router>
		);
	}
}

export default Presupuestos