import React, { Component } from 'react';

class Login extends Component {
	render() {
		return (
			<section id="main-content" className=" ">

      	<section className="wrapper main-wrapper">
					<div>
						<button onClick={this.props.onAuthGit} className='btn btn-default btn-lg btn-marginRight'><i className='fa fa-github icon-md'></i> Iniciar Sesion con github</button>
						<button onClick={this.props.onAuthFb} className='btn btn-default facebook btn-lg'><i className='fa fa-facebook icon-md'></i>  <span>Iniciar Sesion con facebook</span></button>
					</div>
				</section>
			</section>
		);
	}
}
export default Login