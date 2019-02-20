import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap';

class Login extends Component {
  constructor(props){
    super(props)

    this.state = {
    email: '',
    password: '',
  }
// Methods
  this.onChange = this.onChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.login = this.login.bind(this);

  }
  onChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit(event){
    event.preventDefault();
    this.login();

    // Reset form
    this.setState({
      email: '',
      password: ''
    });

  }
  login(){
    const data = JSON.parse(localStorage.getItem('data'));
    let isSuccessful = false;

    for (let index = 0; index < data.length; index++) {
      if(this.state.email === data[index].email &&
       this.state.password === data[index].password){
          isSuccessful = true;
          break;
      }
    }
    if(isSuccessful){
      alert('login Suceeded');
    }else{
      alert('login failed');
    }
  }
  render() {
    return (
        <Container className = "mt-3">
            <h2>Login Form</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
              name = "email"
              type="email" 
              placeholder="Enter email"
              value = {this.state.email}
              onChange = {event => this.onChange(event)}
               />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
              name = "password"
              type="password" 
              placeholder="Password"
              value = {this.state.password}
              onChange = {event => this.onChange(event)}
               />
            </Form.Group>
            <Button onClick = {this.handleSubmit} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
    )
  }
}

export default Login;