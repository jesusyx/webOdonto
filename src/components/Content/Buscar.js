import React, { Component } from 'react';


function searchingFor(term2){
  return function(x){
    if (x.first.toLowerCase().includes(term2.toLowerCase())) {
      return true
    }
    else if (x.last.toLowerCase().includes(term2.toLowerCase())) {
      return true
    }
    else if (x.age.toString().toLowerCase().includes(term2.toLowerCase())) {
      return true
    }
  }
}

class Buscar extends Component {
  constructor(props){
    super(props)
    this.state= {
      people:[
        {
          id:1,
          first:'Sarah',
          last:'Johnson',
          age:25
        },
        {
          id:2,
          first:'Caldwell',
          last:'Thompson',
          age:32
        },
        {
          id:3,
          first:'Hart',
          last:'Maylavb',
          age:96
        },
        {
          id:4,
          first:'Demetrius',
          last:'McZero',
          age:12
        }
      ],
      term:'',
    }
    this.searchHandler = this.searchHandler.bind(this);
  }


  searchHandler(event){
    this.setState({term: event.target.value})
  }
  render() {

    //const {term, people} = this.state;
    return (
      <div>
        <form>
          <input type="text"
                 onChange={this.searchHandler}
                 value={this.state.term}
          />
        </form>
        {this.state.people.filter(searchingFor(this.state.term)).map(person =>
            <div key={person.id}>
              <p>{person.first}|{person.last}|{person.age}</p>
            </div>
          )}
      </div>
    );
  }
}
export default Buscar
