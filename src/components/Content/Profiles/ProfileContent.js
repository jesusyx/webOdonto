import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import Presupuestos from './Presupuestos'
import Pagos from './Pagos'
import Odontograma from './Odontograma'
import HistoriaClinica from './HistoriaClinica'
import Actividad from './Actividad'

class ProfileContent extends Component {
	render() {
        let styleActive={
            'color': '#ffffff',
            'backgroundColor':'rgba(100, 100, 100, 0.2)',
            'backgroundImage': 'none'
        }
		return (
        <Router>
		<div className="col-md-12 col-sm-12 col-xs-12">
			<div className="">

       {/* <section className="box">
            <header className="panel_header">
                <h2 className="title pull-left">Opciones del paciente</h2>
            </header>
            <div className="content-body">    
            		<div className="row">

                    <div className="col-md-12 col-sm-12 col-xs-12">

                        <h4></h4>

                        <ul className="nav nav-tabs nav-justified primary">
                            <li className="active">
                                <a href="#Presupuestos" data-toggle="tab">
                                    <i className="fa fa-home"></i> Presupuestos
                                </a>
                            </li>
                            <li>
                                <a href="#Evolución" data-toggle="tab">
                                    <i className="fa fa-user"></i> Evolución 
                                </a>
                            </li>
                            <li>
                                <a href="#Pagos" data-toggle="tab">
                                    <i className="fa fa-envelope"></i> Pagos
                                </a>
                            </li>
                            <li>
                                <a href="#Actividad" data-toggle="tab">
                                    <i className="fa fa-cog"></i> Actividad
                                </a>
                            </li>
                        </ul>

                        <div className="tab-content primary">
                            <div className="tab-pane fade in active" id="Presupuestos">

                                <div>

                                    <h3>No hay presupuesto para este paciente</h3>
                                    <button className="btn btn-primary">Crear</button>


                                </div>

                            </div>
                            <div className="tab-pane fade" id="Evolución">

                               <h3>Hojas de evolución</h3>
                               <p>Usa las hojas de evolución para agrupar tratamientos y procedimientos.</p>
                               <button className="btn btn-primary">Crear</button>

                            </div>
                            <div className="tab-pane fade" id="Pagos">

                              <h3>Registrar un pago</h3>
                              <div className="row">
																<div className="col-xs-12 col-md-3">
																		<div className="form-group">
		                                  <label className="form-label" htmlFor="field-1">Nro Nota/Factura</label>
		                                  <span className="desc"></span>
		                                  <div className="controls">
		                                    	<input type="text" className="form-control" id="field-1"/>
		                                  </div>
		                               </div>																						
																		<div className="form-group">
		                                  <label className="form-label" htmlFor="field-1">Descripcion</label>
		                                  <span className="desc"></span>
		                                  <div className="controls">
		                                    	<input type="text" className="form-control" id="field-1"/>
		                                  </div>
		                               </div>
		                               <button className="btn btn-primary">Crear</button>
																</div>
																

                              </div>
                                   

                            </div>

                            <div className="tab-pane fade" id="Actividad">

                                <h3>No hay citas registradas para este paciente.</h3>


                            </div>
                        </div>

                    </div>
                    <br/><div className="clearfix"></div><br/>
                </div>
            </div>
        </section>*/}
                <nav className="navbar navbar-primary navbar-default navWithoutMarginBottom">
                    <div className="container-fluid">
                        
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-19">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Menu</a>
                        </div>

                        
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-19">
                            <ul className="nav navbar-nav">
                                <li><NavLink activeStyle={styleActive} to="/PerfilPaciente/Presupuestos">Presupuestos</NavLink></li>
                                <li><NavLink activeStyle={styleActive} to="/PerfilPaciente/Pagos">Pagos</NavLink></li>
                                <li><NavLink activeStyle={styleActive} to="/PerfilPaciente/Odontograma">Odontograma</NavLink></li>
                                <li><NavLink activeStyle={styleActive} to="/PerfilPaciente/HistoriaClinica">Historia Clinica</NavLink></li>
                                <li><NavLink activeStyle={styleActive} to="/PerfilPaciente/Actividad">Actividad</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Route exact path="/PerfilPaciente/Presupuestos" render={()=>{
                    return(
                        <Presupuestos
                            patient={this.props.patient}
                            OnSendtextPresupuestoItems={this.props.OnSendtextPresupuestoItems}
                            handleViewPresupuesto={this.props.handleViewPresupuesto}
                            presupuestoPatient={this.props.presupuestoPatient}
                            redirect={this.props.redirect}
                            onSendtextPresupuestoItemsTwo={this.props.onSendtextPresupuestoItemsTwo}
                        />
                    )

                }}/>
                <Route exact path="/PerfilPaciente/Pagos" render={()=>{
                    return(
                        <Pagos/>
                    )

                }}/>
                <Route exact path="/PerfilPaciente/Odontograma" render={()=>{
                    return(
                        <Odontograma/>
                    )

                }}/>
                <Route exact path="/PerfilPaciente/HistoriaClinica" render={()=>{
                    return(
                        <HistoriaClinica/>
                    )

                }}/>
                <Route exact path="/PerfilPaciente/Actividad" render={()=>{
                    return(
                        <Actividad/>
                    )

                }}/>

            </div>
        </div>
        </Router>
		);
	}
}
export default ProfileContent