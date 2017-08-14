import React, { Component } from 'react';

class Header extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
				<div className='page-topbar '>
		        <div className='logo-area'>

		        </div>
		        <div className='quick-area'>
		            <div className='pull-left'>
		                <ul className="info-menu left-links list-inline list-unstyled">
		                    <li className="sidebar-toggle-wrap">
		                        <a href="#" data-toggle="sidebar" className="sidebar_toggle">
		                            <i className="fa fa-bars"></i>
		                        </a>
		                    </li>
		                </ul>
		            </div>

		            <div className='pull-right'>
		                <ul className="info-menu right-links list-inline list-unstyled">
		                    <li className="profile">
		                        <a href="#" data-toggle="dropdown" className="toggle">
		                            <img src={this.props.profile} alt="user-image" className="img-circle img-inline"/>
		                            <span>{this.props.displayName} <i className="fa fa-angle-down"></i></span>
		                        </a>
		                        <ul className="dropdown-menu profile animated fadeIn">
		                            <li>
		                                <a href="#settings">
		                                    <i className="fa fa-wrench"></i>
		                                    Config.
		                                </a>
		                            </li>
		                            <li>
		                                <a href="#profile">
		                                    <i className="fa fa-user"></i>
		                                    Perfil
		                                </a>
		                            </li>
		                            <li>
		                                <a href="#help">
		                                    <i className="fa fa-info"></i>
		                                    Ayuda
		                                </a>
		                            </li>
		                            <li className="last">
		                                <a type="button" onClick={this.props.onLogout}>
		                                    <i className="fa fa-lock"></i>
		                                    Salir
		                                </a>
		                            </li>
		                        </ul>
		                    </li>
		                </ul>           
		            </div>      
		        </div>
		    </div>
		);
	}
}
export default Header