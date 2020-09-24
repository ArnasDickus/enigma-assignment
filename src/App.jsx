import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route}  from 'react-router-dom';


import CustomNavbar from "./components/CustomNavbar";

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Display from "./components/Display";



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      Data: {
        email: '',
        password: '',
      }
    }
  }
  render() {
    return (
    <Router>
      <div>
        <CustomNavbar />
        <Route exact path = '/' component = {Home} />
        <Route path = '/register' component = {Register} />
        <Route path = '/login' component = {Login} />
        <Route path = '/display' component = {Display} />
        
      </div>
    </Router>
    );
  }
}

export default App;
