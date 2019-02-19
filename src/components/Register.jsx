import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap';

class Register extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      data: {
        email: '',
        password: '',
      },
    }

/*
  Take inputs Done
  Put inputs in local storage and allow to push it into it.
*/
    // This binding is necessary to make `this` work in the callback 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.storeData = this.storeData.bind(this);

  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.storeData();
    console.log(this.state);
  // Reset form;
    this.setState({
      email: '',
      password: '',
    })
  }

  storeData = () => {
    localStorage.setItem('data', JSON.stringify(this.state.data));
  }


  render() {
    return (
    <Container >
      <h2>Registration Form</h2>
        <Form >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
             {/* <Form.Control value = {this.state.email} onChange = {this.handleEmailChange} type="email" placeholder="Enter email" />  */}
             <Form.Control 
             name = "email"
             value = {this.state.email} 
             onChange = {event => this.onChange(event)} 
             type="email" 
             placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
             {/* <Form.Control value = {this.state.password} onChange = {this.handlePasswordChange} type="password" placeholder="Password" />  */}
             <Form.Control 
             name = "password"
             value = {this.state.password} 
             onChange = {event => this.onChange(event)} 
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