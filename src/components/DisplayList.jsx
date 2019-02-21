import React, { Component } from 'react'
import {Button} from 'react-bootstrap';


export class DisplayList extends Component {
    
    constructor(props){
        super(props)


        // Methods
        this.handleDelete = this.handleDelete.bind(this);
    }

    
    handleDelete(){
        const data = JSON.parse(localStorage.getItem('data'));
        for (let index = 0; index < data.length; index++) {
            if(this.props.email === data[index].email &&
                this.props.password === data[index].password){
                data.splice(data[index], 1);
            }
        }
        localStorage.setItem('data', JSON.stringify(data));
        this.props.updateList(data);
    }

  render() {
    return (
    <div className = "mt-4">
        <li className="list-group-item text-justify">
            Email: {this.props.email} 
            <br /> 
            Password: {this.props.password}
            <br /> 
            <Button variant = "info mr-4 mt-1">Edit</Button>
            <Button onClick = {this.handleDelete} variant = "danger mt-1">Delete</Button>
        </li>  
    </div>
    )
  }
}

