import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class SideBar extends Component {
	render() {
		return (
			    <div className="page-sidebar ">
            {/*MAIN MENU - START*/}
            <div className="page-sidebar-wrapper" id="main-menu-wrapper"> 

                {/*USER INFO - START*/}
                    <div className="profile-info row">

                        <div className="profile-image col-md-4 col-sm-4 col-xs-4">
                            <a href="ui-profile.html">
                                <img src={this.props.profile} className="img-responsive img-circle"/>
                            </a>
                        </div>

                        <div className="profile-details col-md-8 col-sm-8 col-xs-8">

                            <h3>
                                <a href="ui-profile.html">{this.props.displayName}</a>

                                {/*Available statuses: online, idle, busy, away and offline*/}
                                <span className="profile-status online"></span>
                            </h3>

                            <p className="profile-title">{this.props.user ? "Cirujano Dentista" : "..."}</p>

                        </div>

                    </div>
                {/*USER INFO - END*/}


                <ul className='wraplist'>
                     <li>
                        <Link to="/"><i className="fa fa-home"></i> <span className="title">Inicio</span></Link>
                    </li>

                    <li>
                        <Link to="/Doctores"><i className="fa fa-user-md"></i> <span className="title">Doctores  <span className="badge badge-purple">{this.props.user ? "3" : null}</span></span></Link>
                    </li>

                    <li >
                        <a><i className="fa fa-users"></i> <span className="title">Pacientes <span className="badge badge-success">{this.props.user ? this.props.lengthMessages : null}</span><span className="arrow "></span></span></a>
                        <ul className="sub-menu">
                            <li><Link to="/Pacientes">Todos los pacientes</Link></li>
                            <li><Link to="/AgregarPaciente">Agregar Paciente</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/Agenda"><i className="fa fa-calendar"></i> <span className="title">Agenda</span></Link>
                    </li>
                    <li>
                        <Link to="/Reportes"><i className="fa fa-bar-chart"></i> <span className="title">Reportes</span></Link>
                    </li>

                    <li>
                        <Link to="/Otros"><i className="fa fa-suitcase"></i> <span className="title">Otros</span><span className="arrow "></span></Link>
                        <ul className="sub-menu">
                            <li><a href="xx.html">1</a></li>
                            <li><a href="xx.html">1</a></li>
                            <li><a href="xx.html">1</a></li>
                        </ul>
                    </li>

                </ul>
            </div>
            {/*MAIN MENU - END*/}
        </div>
		);
	}
}
export default SideBar