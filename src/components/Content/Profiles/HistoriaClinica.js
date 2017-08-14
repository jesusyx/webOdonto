import React, { Component } from 'react';

class HistoriaClinica extends Component {
	render() {
		let width={
            'width':'300px'
        }
		return (
			      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
	               <section className="box  shadow">
	                  <header className="panel_header">
	                      <h2 className="title pull-left">Examen Fisico</h2>
	                  </header>
	                  <div className="content-body">
	                  	<div className="row">
                            <div className="list-unstyled">
                            
                                <li className="col-xs-12 col-sm-6 col-lg-4"><i className='heart icon icon-danger'></i> Tension Arterial: <b>85/105</b></li>    
                                <li className="col-xs-12 col-sm-6 col-lg-4"><i className='thermometer three quarters icon icon-primary'></i>  Temperatura:<b>36</b></li>
                                <li className="col-xs-12 col-sm-6 col-lg-4"><i className='heartbeat icon icon-danger'></i> Ritmo Cardiaco:<b>65</b></li>
                                <li className="col-xs-12 col-sm-6 col-lg-4"><i className='treatment icon icon icon-info'></i> Frecuencia Respiratoria:<b>115</b></li>
                                <li className="col-xs-12 col-sm-6 col-lg-4"><i className='theme icon icon-danger'></i>  Grupo Sanguineo: <b>AB+</b></li>
                                
                            </div>
                        </div>
                        <button className="btn btn-primary shadow">Editar</button>

	               
	                  </div>
	              </section>
	              <section className="box  shadow">
	                  <header className="panel_header">
	                      <h2 className="title pull-left">Examen Clínico</h2>
	                  </header>
	                  <div className="content-body">
              						<h3 className="uilabels text-lg">
                             <span className="label label-purple shadow">INTRAORAL</span>
                          </h3>
                          <br/>
	                  	<div className="row">

                            <div className="list-unstyled">
                            		
                                <li className="col-xs-12 col-sm-6 col-lg-4"><i className='fa fa-stethoscope icon-md icon-primary'></i><b>AMÍGDALAS:</b>-</li>    
                                <li className="col-xs-12 col-sm-6 col-lg-4"><i className='fa fa-stethoscope icon-md icon-primary'></i><b>FRENILLO:</b>-</li>
                                <li className="col-xs-12 col-sm-6 col-lg-4"><i className='fa fa-stethoscope icon-md icon-primary'></i><b>NÓDULOS LINFÁTICOS:</b>-</li>
                                <li className="col-xs-12 col-sm-6 col-lg-4"><i className='fa fa-stethoscope icon-md icon-primary'></i><b>OCLUSIÓN:</b>-</li>
                                <li className="col-xs-12 col-sm-6 col-lg-4"><i className='fa fa-stethoscope icon-md icon-primary'></i><b>PALADAR:</b>-</li>
                                <li className="col-xs-12 col-sm-6 col-lg-4"><i className='fa fa-stethoscope icon-md icon-primary'></i><b>PISO DE BOCA:</b>-</li>
                                <li className="col-xs-12 col-sm-6 col-lg-4"><i className='fa fa-stethoscope icon-md icon-primary'></i><b>LENGUA:</b>-</li>
                                <li className="col-xs-12 col-sm-6 col-lg-4"><i className='fa fa-stethoscope icon-md icon-primary'></i><b>GLÁNDULAS SALIVALES:</b>-</li>
                                <li className="col-xs-12 col-sm-6 col-lg-4"><i className='fa fa-stethoscope icon-md icon-primary'></i><b>MUCOSA ALVEOLAR:</b>-</li>
                                <li className="col-xs-12 col-sm-6 col-lg-4"><i className='fa fa-stethoscope icon-md icon-primary'></i><b>CARRILLOS:</b>-</li>
                                
                            </div>
                        </div>
                        

	               
	                  </div>
	                  <div className="content-body">
              						<h3 className="uilabels text-lg">
                             <span className="label label-purple shadow">EXTRAORAL</span>
                          </h3>
                          <br/>
	                  	<div className="row">

                            <div className="list-unstyled">
                            		
                                <li className="col-xs-12 col-sm-6 col-lg-4"><i className='fa fa-stethoscope icon-md icon-primary'></i><b>PIEL:</b>-</li>    
                                <li className="col-xs-12 col-sm-6 col-lg-4"><i className='fa fa-stethoscope icon-md icon-primary'></i><b>LABIOS:</b>-</li>
                                <li className="col-xs-12 col-sm-6 col-lg-4"><i className='fa fa-stethoscope icon-md icon-primary'></i><b>SENOS MAXILIARES:</b>-</li>
                                <li className="col-xs-12 col-sm-6 col-lg-4"><i className='fa fa-stethoscope icon-md icon-primary'></i><b>MÚSCULOS MASTICATORIOS:</b>-</li>
                                <li className="col-xs-12 col-sm-6 col-lg-4"><i className='fa fa-stethoscope icon-md icon-primary'></i><b>ATM:</b>-</li>
                                
                            </div>
                        </div>
                        <br/>
                        <button className="btn btn-primary shadow">Editar Examen Clinico</button>

	               
	                  </div>

	              </section>


	              <section className="box  shadow">
	                  <header className="panel_header">
	                      <h2 className="title pull-left">AMNESIS</h2>
	                  </header>
	                  <div className="content-body">
			                  <h3 className="uilabels text-lg">
                           <span className="label label-purple shadow">HÁBITOS</span>
                        </h3>
                        <br/>
	                  	<div className="row">
                            <div className="list-unstyled">
                            	<div className="col-xs-12 col-sm-6 col-lg-4">	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Alcohol</button>				                      
			                        </div>

			                        <div className="col-xs-12 col-sm-6 col-lg-4">
	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Cepillado diario</button>			                       
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">
	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Fumar</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">
	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Golosinas y dulces</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">
	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Hábito pernicioso labio</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">
	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Hábito pernicioso lengua</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">
	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Higiene bucal accesoria</button>
			                        </div>                                                         
                            </div>
                        </div>
                        

	               
	                  </div>
	                  <div className="content-body">
			                  <h3 className="uilabels text-lg" >
                           <span className="label label-purple shadow">ENFERMEDADES</span>
                        </h3>
                        <br/>
	                  	<div className="row">
                            <div className="list-unstyled">
                            	<div className="col-xs-12 col-sm-6 col-lg-4">	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Artritis Reumatoide</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Asma</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Autoinmune</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Cáncer</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Cardíaco</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Diabetes</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>E.T.S.</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Gastritis</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Hepatitis</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Hipotiroidismo</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Sarampión</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Varicela</button>
			                        </div>
                              
                            </div>
                        </div>
                        

	               
	                  </div>
	                  <div className="content-body">
			                  <h3 className="uilabels text-lg">
                           <span className="label label-purple shadow">ALERGIAS</span>
                        </h3>
                        <br/>
	                  	<div className="row">
                            <div className="list-unstyled">
                            
                                <div className="col-xs-12 col-sm-6 col-lg-4">
	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Ácido Acetilsalicílico</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">
	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Alimentos</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">
	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Anestésicos</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">
	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Loratadina</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">
	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Metamizol</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">
	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Paracetamol</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">
	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Penicilina</button>
			                        </div>
			                        <div className="col-xs-12 col-sm-6 col-lg-4">
	                            	
				                           <button onClick={this.props.light} className=" margin-bottom btn btn-default" style={width}>Sulfonamidas</button>
			                        </div>
                            </div>
                        </div>
                        

	               
	                  </div>
	              </section>
           </div>
		);
	}
}
export default HistoriaClinica