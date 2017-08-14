import React, { Component } from 'react';
import moment from 'moment';

class Calendar extends Component {
	componentDidMount(){
    const { calendar } = this.refs;
    $(calendar).fullCalendar({
      events: this.props.events,

      header: {
          left:   'prev,next, today',
          center: 'title',
          right:  'month,agendaWeek,agendaDay, listMonth',//ListMonth just avalible for Fullcalendar v3
        },

      nowIndicator:true,
      theme: false, //desactivando el css styles para el calendario
      navLinks: true,
      droppable: true,
      editable: true,
      selectable: true,
      nowIndicator:true,
      minTime:'07:00:00',
      maxTime:'21:30:00',
      slotDuration:'00:10:00',
      slotLabelFormat:'h:mm a',

      select: function(start, end) {
        var title = prompt('Nombre del evento:');
          var eventData;
          if (title) {
            eventData = {
              title: title,
              start: start,
              end: end
            };
            $(calendar).fullCalendar('renderEvent', eventData, true); // stick? = true
          }
          $(calendar).fullCalendar('unselect');
        },
    });
  }
  componentWillUnmount(){
    const { calendar } = this.refs;
    $(calendar).fullCalendar('destroy');
  }


	render() {

		let style = {
      marginTop:'60px',
      display:'inline-block',
      width:'100%',
      padding:'15px 0 0 15px'
    };
		return (
			<div ref='calendar' className="col-md-10 col-sm-9 col-xs-12"></div>
			)      
	}
}
class ContentAgenda extends Component{
	render(){
    let events = [
      { 
        title:'evento en todo el dia',
        start: '2017-06-17',
        end: '2017-06-17',
        rendering: 'background',
        color: '#00FF00'
      },
      { 
        title:'evento ',
        start: '2017-06-18',
        end: '2017-06-25',
        rendering: 'background',
        color: '#00FF00'
      },
    ]
    let size={
    	fontsize:'13px'
    }
		return(
			<section id="main-content" className=" ">
        <section className="wrapper main-wrapper">
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <div className="page-title">

                            <div className="pull-left">
                                <h1 className="title">Calendario</h1>
                            </div>
                        </div>
                    </div>
                  <div className="clearfix"></div>
                    <div className="col-lg-12">
                        <section className="box nobox">
                            <div className="content-body">
                              <div className="row">
                                  <div className="col-md-2 col-sm-3 col-xs-12">

                                        <form method="post" id="add_event_form">
                                            <input type="text" className="form-control new-event-form" placeholder="Agregar nuevo evento..." />
                                        </form>

                                        <div id='external-events'>
                                            <h4>Draggable Events</h4>
                                            <div className='fc-event bg-purple'>My Event 1</div>
                                            <div className='fc-event bg-purple'>My Event 2</div>
                                            <div className='fc-event bg-purple'>My Event 3</div>
                                            <div className='fc-event bg-purple'>My Event 4</div>
                                            <div className='fc-event bg-purple'>My Event 5</div>
                                            <br/>
                                            <label className="form-label" htmlFor='drop-remove' style={size}>
                                                <input type="checkbox"  id='drop-remove' className="iCheck"/><span>Drop&nbsp;&&nbsp;Remove</span>
                                            </label>

                                            <h4>Created Events</h4>
                                        </div>
                                  </div>
                                  <Calendar events={events} />
                                </div>                      
                            </div>
                        </section>
                    </div>
        </section>
      </section>
		);
	}
}
export default ContentAgenda