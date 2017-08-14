import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfileContent from './ProfileContent';
class Profiles extends Component {
	render() {
		return (
			 <section id="main-content" className=" ">
                <section className="wrapper main-wrapper">

                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <div className="page-title">

                            <div className="pull-left">
                                <h1 className="title">Perfil de paciente</h1>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>


                    <div className="col-lg-12">
                        <section className="box shadow">
                            <div className="content-body">    
                            		<div className="row">
                                    <div className="col-md-3 col-sm-12 col-xs-12">

                                        <div className="uprofile-image ">
                                            <img src={require(`../../../assets/images/${this.props.patient.Sexo}.jpg`)} className="img-responsive" />
                                        </div>


                                        <div className="uprofile-name ">
                                            <h3 className="uilabels text-lg">
                                                <span className="label label-default shadow">{this.props.patient.Sexo=="masculino"?"Sr. ":"Srta. "} {this.props.patient.Nombres}</span>
                                                {this.props.patient.ApellidoPaterno?<span className="label label-default shadow">{this.props.patient.ApellidoPaterno}</span>:null}
                                                {this.props.patient.ApellidoMaterno?<span className="label label-default shadow">{this.props.patient.ApellidoMaterno}</span>:null}
                                                <span className="uprofile-status online"></span>
                                            </h3>
                                            <br/>
                                            <div className="row ">
                                                <Link to="/EditarPaciente" className="btn-marginRight btn btn-primary shadow"><i className="fa fa-edit"></i><span> Editar</span></Link>
                                                <a className="btn-marginRight btn btn-default shadow"><i className="fa fa-print "></i><span> Imprimir</span></a>
                                                
                                                
                                            </div>

                                            {/*<p className="uprofile-title">Administration</p>*/}
                                        </div>
                                                        
                                    </div>
                                        

                                    <div className="col-md-9 col-xs-12">
                                        <section className="box  shadow">
                                        <header className="panel_header">
                                            <h2 className="title pull-left">Información del paciente</h2>
                                        </header>
                                        <div className="content-body uprofile-info">

                                                <div className=" row">
                                                    <ul className="list-unstyled">
                                                        
                                                        {this.props.patient.DNI ? <li className="col-xs-12 col-sm-6 col-lg-6"><i className='icon-sm fa fa-credit-card icon-primary'></i> <b>Dni:</b>{this.props.patient.DNI}</li> :null}    
                                                        {this.props.patient.FechaNacimiento ? <li className="col-xs-12 col-sm-6 col-lg-6"><i className='icon-sm fa fa-calendar icon-primary'></i> <b> Fecha de Nacimiento: </b>{this.props.patient.FechaNacimiento}</li> :null}
                                                        
                                                        {this.props.patient.Descripcion ? <li className="col-xs-12 col-sm-6 col-lg-6"><i className='icon-sm fa fa-stack-exchange icon-primary'></i> <b>Descripcion: </b>{this.props.patient.Descripcion}</li> :null}
                                                        {this.props.patient.Email ? <li className="col-xs-12 col-sm-6 col-lg-6"><i className='icon-sm fa fa-envelope-square icon-primary'></i> <b> Email: </b>{this.props.patient.Email}</li> :null}
                                                        {this.props.patient.Celular ? <li className="col-xs-12 col-sm-6 col-lg-6"><i className='icon-sm fa fa-mobile-phone icon-primary'></i> <b> Celular: </b>{this.props.patient.Celular}</li> :null}
                                                        {this.props.patient.Direccion ? <li className="col-xs-12 col-sm-6 col-lg-6"><i className='icon-sm fa fa-home icon-primary'></i> <b>Direccion: </b>{this.props.patient.Direccion}</li> :null}
                                                        {this.props.patient.Doctor ? <li className="col-xs-12 col-sm-6 col-lg-6"><i className='icon-sm fa fa-user-md icon-primary'></i> <b>Doctor: </b>{this.props.patient.Doctor}</li> :null}
                                                        {this.props.patient.Alerta ? <li className="col-xs-12 col-sm-6 col-lg-6"><i className='icon-sm fa fa-warning icon-danger '></i> <b>Alerta: </b>{this.props.patient.Alerta}</li> :null}
                                                        {this.props.patient.Notas ? <li className="col-xs-12 col-sm-6 col-lg-6"><i className='icon-sm fa fa-book icon-primary'></i> <b>Notas: </b>{this.props.patient.Notas}</li> :null}
                                                        {this.props.patient.Facebook ? <li className="col-xs-12 col-sm-6 col-lg-6"><i className='icon-sm fa fa-facebook-square facebook'></i> <b>Facebook: </b>{this.props.patient.Facebook}</li> :null}
                                                        {this.props.patient.Sexo ? <li className="col-xs-12 col-sm-6 col-lg-6"><i className='icon-sm heterosexual icon icon-primary'></i> <b> Sexo: </b>{this.props.patient.Sexo}</li> :null}
                                                        
                                                    </ul>
                                                </div>
                                        </div>
                                        </section>
                                    </div>
                                    
                                </div>
                            </div>
                        </section>
                        <section className="box">
                            <ProfileContent
                                patient={this.props.patient}
                                OnSendtextPresupuestoItems={this.props.OnSendtextPresupuestoItems}
                                handleViewPresupuesto={this.props.handleViewPresupuesto}
                                presupuestoPatient={this.props.presupuestoPatient}
                                redirect={this.props.redirect}
                                onSendtextPresupuestoItemsTwo={this.props.onSendtextPresupuestoItemsTwo}
                            />
                        </section>
                    </div>


                </section>
            </section>
		);
	}
}
export default Profiles