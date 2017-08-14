import React, { Component } from 'react';
import TableHovered from './TableHovered';
import Buscar from './Buscar'
import Notification from './Notification'

class Pacientes extends Component {
	constructor(props){
		super(props)
	}


  handleNoti(){
    if (this.props.notification){
      return <Notification />
    }
  }

	render() {
		return (
			<section id="main-content" className=" ">

      	<section className="wrapper main-wrapper">
        
          <div className="col-lg-12">
          {this.handleNoti()}
            <section className="box shadow ">
                <header className="panel_header">
                    <h2 className="title pull-left">Pacientes</h2>                
                </header>
                <div className="content-body">
									<TableHovered
										messages={this.props.messages}
                    term={this.props.term}
                    whenEscribes={this.props.whenEscribes}
                    removes={this.props.removes}
                    handleChangeredirect={this.props.handleChangeredirect}
                    handleEdit={this.props.handleEdit}
                    handleView={this.props.handleView}
									/>
                </div>
            </section>
        	</div>
      	</section>
      </section>
		);
	}
}
export default Pacientes