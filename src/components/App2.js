import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

import Login from './Content/Login'
import Sidebar from './Sidebar'
class App2 extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route path="/login/menu" render={ () => {

						return (
							<Sidebar/>					
						)
					}}/>
					<Route exact path="/login" render={()=>{
						return (
							<Link to="/login/menu">Vete al menu</Link>
						)
					}}/>
			</div>	
			</Router>
			
		);
	}
}
export default App2
