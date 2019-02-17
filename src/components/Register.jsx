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
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.storeData = this.storeData.bind(this);
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }
  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  storeData = () => {

    if(localStorage.getItem("data") === null){
        let dataArray = [];
        this.setState(prevState => ({
          data: [...prevState.data, dataArray]
        }))
        localStorage.setItem('data', JSON.stringify(dataArray));
    }else{
        // let data = JSON.parse(localStorage.getItem("data"));
        // data.push(bookmarkObject);
        // localStorage.setItem("data", JSON.stringify(dataArray));
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    let data = "";
    localStorage.setItem('data', JSON.stringify(data));
    /*
    Get values from inputs Done
    Take values from input, ant put it into this state data array

    */
    this.storeData();

    this.setState({
      email: '',
      password: '',
    })
  }


  render() {
    return (
    <Container >
      <h2>Registration Form</h2>
        <Form >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
             <Form.Control value = {this.state.email} onChange = {this.handleEmailChange} type="email" placeholder="Enter email" /> 
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
             <Form.Control value = {this.state.password} onChange = {this.handlePasswordChange} type="password" placeholder="Password" /> 
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