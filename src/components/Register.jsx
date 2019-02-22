import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap';

class Register extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
    }

    // This binding is necessary to make `this` work in the callback 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.storeData = this.storeData.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.loginAuthentication = this.loginAuthentication.bind(this);

  }

  loginAuthentication = () => {

    if(!this.state.email || !this.state.password){
      alert('Please fill in the form');
      return false;
    }
    
   let data = JSON.parse(localStorage.getItem('data'));

      for (let index = 0; index < data.length; index++) {
        // If local storage empty can't compare it
        if(localStorage.length === 0){
          return true
        }else if(this.state.email === data[index].email){
          alert('This Email already exist');
          return false
        }else{
          return true;
        } 
      }
    return true;
  }
  handleEmailChange = (event) =>{
    this.setState({
      email: event.target.value,
    })
  }
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.loginAuthentication()){
      this.storeData();
    }
    

    // Reset form;
    this.setState({
      email: '',
      password: '',
    })
  }

  storeData = () => {


    // Get that item from local storage.
    if(localStorage.getItem("data") === null){
            let localStorageArray = [];
            localStorageArray.push(this.state);
            localStorage.setItem('data', JSON.stringify(localStorageArray));
    }else{
        let localStorageArray = JSON.parse(localStorage.getItem("data"));
        localStorageArray.push(this.state);
        localStorage.setItem("data", JSON.stringify(localStorageArray));
    }
  }
  render() {
    return (
    <Container className = "mt-3" >
      <h2>Registration Form</h2>
        <Form >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
             <Form.Control 
            autoComplete="email" required
            name = "email"
            value = {this.state.email} 
            onChange = {this.handleEmailChange}
            type="email" 
            placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
             <Form.Control 
             autoComplete="password" required
             name = "password"
             value = {this.state.password} 
            onChange = {this.handlePasswordChange}
            type="password" 
            placeholder="Password" /> 
          </Form.Group>
          <Button onClick = {this.handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
          </Form>
    </Container>  
    )
  }
}

export default Register;