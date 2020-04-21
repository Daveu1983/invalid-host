import React, { Component } from 'react';
import "./ShowEmployees.css";

class ShowEmployees extends Component{
    render(){
        return(
            <div className="row" id="show">
                <div className="col-md-4 col-12"><b>Employee First Name: </b>{this.props.firstName}</div>
                <div className="col-md-4 col-12"><b>Employee Second Name: </b>{this.props.secondName}</div>
                <div className="col-md-4 col-12"><b>Employee ID: </b>{this.props.iD}</div>
            </div>
        )
    }
}

export default ShowEmployees