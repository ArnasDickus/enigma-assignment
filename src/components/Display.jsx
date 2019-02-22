import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import {DisplayList} from './DisplayList';


class Display extends Component {
  constructor(props){
    let data = JSON.parse(localStorage.getItem('data'));
    super(props)
    this.state = {
      data: data,
  }

  // Methods
  this.displayValues = this.displayValues.bind(this);
  }
  
  displayValues(){
     if(localStorage.length === 0){
       return false;
     }else{
        return this.state.data.map((data1, index) =>
        <DisplayList
          key = {index}
          email = {data1.email}
          password = {data1.password}
          updateList = {this.updateList}
          /> 
        )
     }
    
    
  }
  // This is the method that will be called from the child component.
  updateList = (data) => {
    this.setState({
      data
    });
  }
  render() {
    return (
    <Container>
      <ul className="list-group">
        {this.displayValues()}
      </ul>
    </Container>
    )
    
  }
}

export default Display;
