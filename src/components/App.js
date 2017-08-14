import React, { Component } from 'react'
import profile from '../assets/images/profile.png'
import Header from './Header'
import Sidebar from './Sidebar'
//imports content
import Inicio from './Content/Inicio'
import Pacientes from './Content/Pacientes'
import ContentAgenda from './Content/ContentAgenda'
import Doctores from './Content/Doctores'
import AgregarPaciente from './Content/AgregarPaciente'
import EditarPaciente from './Content/EditarPaciente'
import Profiles from './Content/Profiles/Profiles'
import uuid from 'uuid'

import Notification from './Content/Notification'


import { RouteTransition } from 'react-router-transition';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

import Login from './Content/Login'
import firebase from 'firebase'

class App extends Component{
	constructor(){
		super()
		this.state = {

			messages:[
				{
					"id":1,
					"ApellidoPaterno":"Reolfo",
					"ApellidoMaterno":"Reolfo",
					"Nombres":"Lynsey",
					"DNI":"146706441-6",
					"FechaNacimiento":"21/09/1991",
					"Sexo":"femenino",
					"ImagenPerfil":"url",
					"Descripcion":"Tiene gastritis",
					"Email":"Jesusyx22@hot.com",
					"Celular":"7-(849)495-1576",
					"Direccion":"Jr.Lima",
					"Doctor":"Dr. Henry Quispe Cruz",
					"Alerta":"tiene diabetes",
					"Notas":"askito",
					"Facebook":"fab/lorena",

					tensionArterial:"85/105",
					frecuenciaRespiratoria:115,
					temperatura:36,
					ritmoCardiaco:65,
					grupoSanguineo:"AB+",
					
					

					"presupuesto":[

						{
							"id":uuid.v4(),
							"nombre":"presupuesto1",
							"total":"600",
							"presupuestoItems":[
								{
									"id":uuid.v4(),
									"cantidad":1,
									"tratamiento":"resina",
									"importe":200
								},

								{
									"id":uuid.v4(),
									"cantidad":2,
									"tratamiento":"resina",
									"importe":200
								}
							]

						},

						{
							"id":uuid.v4(),
							"nombre":"presupuesto2",
							"total":"1000",
							"presupuestoItems":[
								{
									"id":uuid.v4(),
									"cantidad":1,
									"tratamiento":"resina",
									"importe":200
								},

								{
									"id":uuid.v4(),
									"cantidad":2,
									"tratamiento":"resina",
									"importe":400
								}
							]

						}
					],
				}
			],
			
			term:'',

			notification:false,
			redirect:false,
			patient:{Sexo:"masculino"},
			presupuestoPatient:null,
			user:null
		}

		this.handleOnAuthGit = this.handleOnAuthGit.bind(this)
		this.handleLogout = this.handleLogout.bind(this)
		this.handleOnAuthFb = this.handleOnAuthFb.bind(this)
	}
	
	/*firebase Auth*/
	componentWillMount () {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ user })
				console.log(user)
			} else {
				this.setState({user:null})
			}
		})
	}

	/*Buscar*/
	searchHandler(event) {
    this.setState(
    	{term: event.target.value}
    )
  }

  /*Eliminar*/
  handleDelete(id){
  	//event.preventDefault()
  	let position = this.state.messages.map(x => x.id).indexOf(id)
  	//console.log(position)
  	let array1 = this.state.messages.slice(0,position)
  	let array2 = this.state.messages.slice(position+1)
  	let newArray = array1.concat(array2)
  	//this.state.messages.splice(position,1)
  	this.setState({
  		messages:newArray
  	})
  }

	/*Agregar Nuevo paciente*/
  handleOnSendtext(event){
  	event.preventDefault()
  	let newPatient = {
  		"id":Math.max(...this.state.messages.map((x)=>(x.id)))+1,
  		"ApellidoPaterno":event.target.apellidoPaterno.value,
  		"ApellidoMaterno":event.target.apellidoMaterno.value,
  		"Nombres":event.target.nombre.value,
  		"DNI":event.target.dni.value,
			"FechaNacimiento":event.target.fechaNacimiento.value,
			"Sexo":event.target.sexo.value,
			"ImagenPerfil":"url",
			"Descripcion":event.target.descripcion.value,
			"Email":event.target.email.value,
			"Celular":event.target.celular.value,
			"Direccion":event.target.direccion.value,
			"Doctor":event.target.doctor.value,
			"Alerta":event.target.alerta.value,
			"Notas":event.target.notas.value,
			"Facebook":event.target.facebook.value,
			"presupuesto":this.state.messages[0].presupuesto.map(x=>(x)),

			tensionArterial:"",
			frecuenciaRespiratoria:"",
			temperatura:"",
			ritmoCardiaco:"",
			grupoSanguineo:"",
  	}


  	this.setState({
  		messages:this.state.messages.concat([newPatient]),
  		notification:true,
  		redirect:true,
  	})

  	setTimeout(()=>(this.setState({redirect:false})),500)

  	setTimeout(()=>(this.setState({notification:false})),5000)  	
  }

	/*QUITAR ESTO*/
  handleChangeredirect(){
  	console.log("me queres cagar")
  	/*this.setState({
  		redirect:false
  	})*/
  }
	
	/*ENVIAR PATIENT{} A EDITAR PACIENTES LABELS*/
	handleEdit(patient){
		this.setState({
			patient:patient
		})
	}


	handleOnSendtextEdit(event, id){
		event.preventDefault()
		console.log(id)
		//console.log(this.state.patient)
		let position = this.state.messages.map(x => x.id).indexOf(id)
		console.log(position)
		let editPatient = {
  		"id":id,
  		"ApellidoPaterno":event.target.apellidoPaterno.value,
  		"ApellidoMaterno":event.target.apellidoMaterno.value,
  		"Nombres":event.target.nombre.value,
  		"DNI":event.target.dni.value,
			"FechaNacimiento":event.target.fechaNacimiento.value,
			"Sexo":event.target.sexo.value,
			"ImagenPerfil":"url",
			"Descripcion":event.target.descripcion.value,
			"Email":event.target.email.value,
			"Celular":event.target.celular.value,
			"Direccion":event.target.direccion.value,
			"Doctor":event.target.doctor.value,
			"Alerta":event.target.alerta.value,
			"Notas":event.target.notas.value,
			"Facebook":event.target.facebook.value,
			"presupuesto":this.state.messages[position].presupuesto.map(x=>(x))
  	}
  	//console.log(editPatient)
  	//console.log(this.state.messages[position])
  	//messages[1,2,3,4,new5,6,7,8,9,10]
  	let array = this.state.messages.slice(0,position).concat([editPatient]).concat(this.state.messages.slice(position+1))
		console.log("PATIENT", editPatient)


  	this.setState({
  		messages:array,
  		notification:true,
  		redirect:true,
  	})
  	setTimeout(()=>(this.setState({redirect:false})),500)

  	setTimeout(()=>(this.setState({notification:false})),5000)
	}
	


	handleView(patient){
		
		console.log("HAZ HECHO CLICK EN VER PACIENTE",patient)
		this.setState({
			patient:patient
		})
	}

	handleViewPresupuesto(presupuestoPatient){
		
		console.log("HAZ HECHO CLICK EN VER ESTE PRESUPUESTO",presupuestoPatient)
		this.setState({
			presupuestoPatient:presupuestoPatient
		})
	}

	handleOnSendtextPresupuestoItems(event, id){
		event.preventDefault()
		let position = this.state.messages.map(x => x.id).indexOf(id)
		console.log("ESTAS ENVIANDO UN NUEVO PRESUPUESTO")
		let newPresupuesto = {
	  		"id":uuid.v4(),
	  		"nombre":event.target.nombrePresupuesto.value,
	  		"notas":event.target.notasPresupuesto.value,
	  		"total":"",
				"presupuestoItems":[
					{
						"id":uuid.v4(),
						"cantidad":"",
						"tratamiento":"",
						"importe":""
					}
				]

	  	}
	  console.log("ESTAS ENVIANDO UN NUEVO ITEM",newPresupuesto)	

		//let array = this.state.messagesp[position].presupuesto.presupuestoItems.concat([newPresupuesto])

  	this.state.messages[position].presupuesto=this.state.messages[position].presupuesto.concat([newPresupuesto])
		this.state.redirect=true
  	this.forceUpdate();

	}
	onSendtextPresupuestoItemsTwo(event, idPresupuesto){
		event.preventDefault()
		//let positionMessages = this.state.messages.map(x => x.idMessages).indexOf(idMessages)
		//let positionPresupuesto = this.state.messages[this.state.messages.map(x => x.idMessages).indexOf(idMessages)].presupuesto.map(x => x.idPresupuesto).indexOf(idPresupuesto)
		let position = this.state.presupuestoPatient.map(x => x.idPresupuesto).indexOf(idPresupuesto)
		console.log("Estas enviando un item de presupuesto")
		let newItemPresupuesto = {
			"id":uuid.v4(),
			"cantidad":event.target.cantidad.value,
			"tratamiento":event.target.tratamiento.value,
			"importe":event.target.importe.value
		}
		console.log("ESTAS ENVIANDO UN NUEVO ITEMpresuPUESTO",  newItemPresupuesto)
		console.log("Position mensajes y presupuesto")
		this.state.presupuestoPatient[position].presupuestoItems = this.state.presupuestoPatient[position].presupuestoItems.concat([newPresupuesto])
  	this.forceUpdate();
	}


	//firebase autentication
	handleOnAuthGit () {
		const provider = new firebase.auth.GithubAuthProvider()

		firebase.auth().signInWithPopup(provider)
			.then( (result) => {result.user.email!='jesusyx22@gmail.com'?firebase.auth().signOut().then( () => alert("Seas mamon")):console.log("Q ASE")})
			.catch( error => console.error(`Error: ${error.code}: ${error.message}`))
	}

	handleOnAuthFb () {
		const provider = new firebase.auth.FacebookAuthProvider()
		firebase.auth().signInWithPopup(provider)
			.then( (result) => {result.user.email!='i_your_best_friend@hotmail.com'?firebase.auth().signOut().then( () => alert("Seas mamon")):console.log("Q ASE")})
			.catch( error => console.error(`Error: ${error.code}: ${error.message}`))
	}
	
	handleLogout () {
		console.log("haz hecho click")
		firebase.auth().signOut()
			.then( () => console.log('te has desconectado papu'))
			.catch( () => console.log('Un error ah ocurrido'))
	}


	render(){
		return(

			<Router>
				<div className="page-container row-fluid">
				{console.log("Re Renderizando")}


					<Header
						user={this.state.user}
						profile={this.state.user ? this.state.user.photoURL : profile}
						displayName={this.state.user ? this.state.user.displayName : "..."}
						onLogout={this.handleLogout}
						
					/>
					 

					<Sidebar
						user={this.state.user}
						profile={this.state.user ? this.state.user.photoURL : profile}
						displayName={this.state.user ? this.state.user.displayName : "..."}
						lengthMessages={this.state.messages.length}
					/>

					{/*ROUTEs*/}
					
		      <Route exact path="/" render={()=>{
		      	if (this.state.user) {
		      		return(
							<Inicio 
								messages={this.state.messages}
								whenEscribes={this.searchHandler.bind(this)}
								removes={this.handleDelete.bind(this)}
								term={this.state.term}
								notification={this.state.notification}
								handleChangeredirect={this.handleChangeredirect.bind(this)}
								handleEdit={this.handleEdit.bind(this)}
								handleView={this.handleView.bind(this)}
							/>
							)
		      	} else {
		      		return(
		      			<Login 
		      				onAuthGit={this.handleOnAuthGit}
		      				onAuthFb={this.handleOnAuthFb}

		      			/>
		      		)
		      	}						
					}}/>

					<Route path="/Pacientes" render={()=>{
						if (this.state.user) {
		      		return(
							<Pacientes
								messages={this.state.messages}
								whenEscribes={this.searchHandler.bind(this)}
								removes={this.handleDelete.bind(this)}
								term={this.state.term}
								notification={this.state.notification}
								handleChangeredirect={this.handleChangeredirect.bind(this)}
								handleEdit={this.handleEdit.bind(this)}
								handleView={this.handleView.bind(this)}
							/>
							)
		      	} else {
		      		return(
								<Redirect to='/'/>
		      			)
		      		}
		      	}}/>

					<Route path="/Agenda" render={()=> {
						if (this.state.user) {
		      		return(
								<ContentAgenda/>
							)
		      	} else {
		      		return(
								<Redirect to='/'/>
		      			)
		      		}
					}}/>

					<Route path="/Doctores" render={() => {
						if (this.state.user) {
		      		return(
								<Doctores/>
							)
		      	} else {
		      		return(
								<Redirect to='/'/>
		      			)
		      		}
					}}/>

					<Route path="/AgregarPaciente" render={()=>{
						if (this.state.user){
						return(
							<AgregarPaciente
								onSendtext={this.handleOnSendtext.bind(this)}
								isTrue={this.state.redirect}
								
							/>
							)
						} else {
							 return(
							 	<Redirect to='/'/>
							 )
						}
					}}/>

					<Route path="/PerfilPaciente" render={() => {
						if (this.state.user){
						return(
							<Profiles
								patient={this.state.patient}
								OnSendtextPresupuestoItems={this.handleOnSendtextPresupuestoItems.bind(this)}
								handleViewPresupuesto={this.handleViewPresupuesto.bind(this)}
								presupuestoPatient={this.state.presupuestoPatient}
								redirect={this.state.redirect}
								onSendtextPresupuestoItemsTwo={this.onSendtextPresupuestoItemsTwo.bind(this)}
							/>
							)
						} else {
							return (
							<Redirect to='/'/>
							)
						}

					}}/>

					<Route path="/EditarPaciente" render={() => {
						if (this.state.user){
						return (
								<EditarPaciente
										patient={this.state.patient}
										onSendTextEdit={this.handleOnSendtextEdit.bind(this)}
										isTrue={this.state.redirect}
								/>
								)} else {
								return(
								<Redirect to='/'/>
								)
						}
					}}/>
						
				</div>
			</Router>
		)
	}
}

export default App