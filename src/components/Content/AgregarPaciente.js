import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ReactTooltip from 'react-tooltip'
class AgregarPaciente extends Component {
    render() {
        return (
            <section id="main-content" className=" ">
            {this.props.isTrue ? <Redirect to="/Pacientes"/> : console.log("que verga paso2")}
            <form onSubmit={this.props.onSendtext}>
                <section className="wrapper main-wrapper">

                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <div className="page-title">

                            <div className="pull-left">
                                <h1 className="title">Datos Personales</h1>
                            </div>

                            <div className="padding-bottom-30 pull-right">
                                            <div className="text-left">
                                                <button type="submit" className="btn btn-primary" >Guardar</button>
                                                
                                                <button type="button" className="btn">Cancelar</button>
                                            </div>
                                        </div>

                        </div>

                    </div>
                    <div className="clearfix"></div>{/*???*/}
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <section className="box shadow ">
                            <header className="panel_header">
                                <h2 className="title pull-left">Información Basica</h2>
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    
                                        <div className="col-lg-8 col-md-8 col-sm-9 col-xs-12">

                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-1">Nombre</label>
                                                <span className="desc"></span>
                                                <div className="controls">
                                                    <input type="text" name="nombre" className="form-control" id="field-1" required/>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-2">Apellido Paterno</label>
                                                <span className="desc"></span>
                                                <div className="controls">
                                                    <input type="text" name="apellidoPaterno" className="form-control" id="field-2"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-3">Apellido Materno</label>
                                                <span className="desc"></span>
                                                <div className="controls">
                                                    <input type="text" name="apellidoMaterno" className="form-control" id="field-3"/>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-4">Fecha de Nacimiento</label>
                                                <span className="desc">ejm. "04/03/2015"</span>
                                                <div className="controls">
                                                    <input type="date" name="fechaNacimiento"  className="form-control" data-format="dd/mm/yyyy" id="field-4" />
                                                </div>
                                            </div>

                                            


                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-45">DNI</label>
                                                <span className="desc"></span>
                                                <div className="controls">
                                                    <input type="text" name="dni" className="form-control" id="field-45"/>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-5">Sexo</label>
                                                <span className="desc"></span>
                                                <select className="form-control" name="sexo" required>
                                                    <option >masculino</option>
                                                    <option >femenino</option>
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-6">Imagen de Perfil</label>
                                                <span className="desc"></span>
                                                <div className="controls">
                                                    <input type="file" className="form-control" id="field-6"/>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-7">Descripción</label>
                                                <span className="desc">ejm.</span>
                                                <div className="controls">
                                                    <textarea name="descripcion" className="form-control autogrow" cols="5" id="field-7"></textarea>
                                                </div>
                                            </div>
                                            

                                            
                                        </div>

                                        
                                    


                                </div>


                            </div>

                        </section>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <section className="box  shadow">
                            <header className="panel_header">
                                <h2 className="title pull-left">Información de Contacto</h2>
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-9 col-xs-12">
                                            
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-1">Email</label>
                                                <span className="desc"></span>
                                                <div className="controls">
                                                    <input type="text" name="email" className="form-control" id="field-1"/>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-2">Celular</label>
                                                <span className="desc">ejm. "(+51) 982303247"</span>
                                                <div className="controls">
                                                    <input type="text" name="celular"  className="form-control" id="field-2" data-mask="phone"  placeholder="982303247"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-3">Dirección</label>
                                                <span className="desc"></span>
                                                <div className="controls">
                                                    <input type="text"  name="direccion" className="form-control" id="field-3"/>
                                                </div>
                                            </div>
                                            
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <section className="box shadow">
                            <header className="panel_header">
                                <h2 className="title pull-left">Información de Contacto</h2>
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-9 col-xs-12">
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-5">Doctor de cabecera</label>
                                                <span className="desc"></span>
                                                <select className="form-control" name="doctor" defaultValue="Dr. Henry Quispe Cruz">
                                                    <option>Dr. Henry Quispe Cruz</option>
                                                    <option>Dra. Liz Carorina Veiga</option>
                                                                                        
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-1">Alerta</label>
                                                <span className="desc">ejm. Diabético</span>
                                                <div className="controls">
                                                    <input type="text"  className="form-control" name="alerta" id="field-1"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-6">Notas</label>
                                                <span className="desc"></span>
                                                <div className="controls">
                                                    <textarea  name="notas" className="form-control autogrow" cols="5" id="field-6"></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-1">Facebook</label>
                                                <span className="desc"></span>
                                                <div className="controls">
                                                    <input name="facebook" type="text" className="form-control"   id="field-31"/>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    

                    {/*<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title pull-left">Aseguradora</h2>
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <form action="#" method="post">
                                        <div className="col-lg-8 col-md-8 col-sm-9 col-xs-12">

                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-4">Aseguradora</label>
                                                <span className="desc"></span>
                                                <select className="form-control">
                                                    <option>Seleccione una aseguradora</option>
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-5">Nro. de Afiliado</label>
                                                <span className="desc"></span>
                                                <div className="controls">
                                                    <input type="text" className="form-control"   id="field-5"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-6">Es titular de la obra social/Aseguradora</label>
                                                <span className="desc"></span>
                                                <select className="form-control">
                                                    <option></option>
                                                    <option>Si</option>
                                                    <option>No</option>
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-7">Nombre del titular</label>
                                                <span className="desc"></span>
                                                <div className="controls">
                                                    <input type="text" className="form-control"   id="field-7"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="field-8">Relacion del titular o parentesco</label>
                                                <span className="desc"></span>
                                                <div className="controls">
                                                    <input type="text" className="form-control"   id="field-8"/>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-lg-8 col-md-8 col-sm-9 col-xs-12 padding-bottom-30">
                                            <div className="text-left">
                                                <button type="button" className="btn btn-primary">Guardar</button>
                                                <button type="button" className="btn">Cancelar</button>
                                            </div>
                                        </div>

                                    </form>
                                </div>


                            </div>
                        </section>
                    </div>
                */}


                </section>
                </form>
            </section>
        );
    }
}
export default AgregarPaciente