import React, { Component } from 'react';
import DR from '../../assets/images/DR.png'
import DRA from '../../assets/images/DRA.png'
class Doctores extends Component {
	render() {
		return (
			 <section id="main-content" className=" ">
                <section className="wrapper main-wrapper">

                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <div className="page-title">

                            <div className="pull-left">
                                <h1 className="title">Doctores</h1>
                            </div>


                        </div>
                    </div>
                    <div className="clearfix"></div>

                    <div className="col-lg-12">
                        <section className="box shadow">
                            <header className="panel_header">
                                <h2 className="title pull-left">Todos los doctores</h2>                                
                            </header>
                            <div className="content-body">    <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">

                                        <div className="row">
                                            <div className="col-sm-6 col-md-4">
                                                <div className="team-member ">
                                                    <div className="team-img">
                                                        <img className="img-responsive" src={DR} alt=""/>
                                                    </div>
                                                    <div className="team-info">
                                                        <h3><a href="hos-doctor-profile.html">Dr. Henry Quispe Cruz</a></h3>
                                                        <span className='team-member-edit'><a href="hos-doctor-edit.html"><i className='fa fa-pencil icon-xs'></i></a></span>
                                                        <span>Physician</span>
                                                    </div>
                                                    <p>Cirujano Dentista</p>
                                                    <ul className="social-icons list-inline list-unstyled">
                                                        <li><a href="#"><i className="fa fa-facebook icon-bordered icon-primary icon-xs"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-twitter icon-bordered icon-primary icon-xs"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-google-plus icon-bordered icon-primary icon-xs"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-linkedin icon-bordered icon-primary icon-xs"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-4">
                                                <div className="team-member ">
                                                    <div className="team-img">
                                                        <img className="img-responsive" src={DRA} alt=""/>
                                                    </div>
                                                    <div className="team-info">
                                                        <h3><a href="hos-doctor-profile.html">Dr. Liz Carolina Veiga Chambilla</a></h3>
                                                        <span className='team-member-edit'><a href="hos-doctor-edit.html"><i className='fa fa-pencil icon-xs'></i></a></span>
                                                        <span>Surgeon</span>
                                                    </div>
                                                    <p>Cirujano Dentista</p>
                                                    <ul className="social-icons list-inline list-unstyled">
                                                        <li><a href="#"><i className="fa fa-facebook icon-bordered icon-primary icon-xs"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-twitter icon-bordered icon-primary icon-xs"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-google-plus icon-bordered icon-primary icon-xs"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-linkedin icon-bordered icon-primary icon-xs"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-4">
                                                <div className="team-member ">
                                                    <div className="team-img">
                                                        <img className="img-responsive" src={DR} alt=""/>
                                                    </div>
                                                    <div className="team-info">
                                                        <h3><a href="hos-doctor-profile.html">Dr. Practicante</a></h3>
                                                        <span className='team-member-edit'><a href="hos-doctor-edit.html"><i className='fa fa-pencil icon-xs'></i></a></span>
                                                        <span>Cardiologist</span>
                                                    </div>
                                                    <p>El Chico Nuevo</p>
                                                    <ul className="social-icons list-inline list-unstyled">
                                                        <li><a href="#"><i className="fa fa-facebook icon-bordered icon-primary icon-xs"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-twitter icon-bordered icon-primary icon-xs"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-google-plus icon-bordered icon-primary icon-xs"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-linkedin icon-bordered icon-primary icon-xs"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section></div>


                </section>
            </section>
		);
	}
}
export default Doctores