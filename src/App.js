import React, { Component } from 'react';
import './App.css';
import ShowEmployees from './components/ShowEmployees';


class App extends Component{

  state = {
    employees: [{firstName: "david", secondName: "beckham", iD:1},
                {firstName:"Gary", secondName: "Neville", iD:2}]
  }

  render() {
    return(
      <div className="container">
        <div className="App">
          <div>
            {
              this.state.employees.map((element, index) =>{
                return <ShowEmployees key={index}
                          firstName= {element.firstName}
                          secondName= {element.secondName}
                          iD = {element.iD}
                />})
            }
          </div>
        </div>
      </div>
    )
  }
}


export default App;
