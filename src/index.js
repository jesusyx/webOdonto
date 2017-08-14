import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import App2 from './components/App2'

import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/fonts/font-awesome/css/font-awesome.min.css'

//import 'bootstrap/dist/css/bootstrap-theme.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/css/pace/pace-theme-flash.css'
import './assets/css/style.css'
import './assets/css/responsive.css'

import './assets/js/jquery.easing.min.js'

import 'moment/moment.js'

import './assets/plugins/viewport/viewportchecker.js'
import './assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js'
import './assets/js/scripts.js'



/*Full calendar*/
import 'fullcalendar/dist/fullcalendar.min.css'

import 'fullcalendar/dist/fullcalendar.min.js'
import 'fullCalendar/dist/lang/es.js'
//import './assets/plugins/icheck/icheck.min.js'
import './assets/plugins/jquery-ui/smoothness/jquery-ui.min.js'
import './assets/plugins/jquery-ui/smoothness/jquery-ui.min.css'

import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyDiVhYI1djnNvOPxgfUETm_RB1A4cactqo',
  authDomain: 'odontoweb-21a03.firebaseapp.com',
  databaseURL: 'https://odontoweb-21a03.firebaseio.com',
  projectId: 'odontoweb-21a03',
  storageBucket: 'odontoweb-21a03.appspot.com',
  messagingSenderId: '504606064193'
});

import App from './components/App'


ReactDOM.render(<App/>,document.getElementById('root'))