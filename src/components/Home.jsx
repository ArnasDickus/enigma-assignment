import React, { Component } from 'react'
import {Container} from "react-bootstrap";




class Home extends Component {
render() {
    return (
        <Container className = "mt-3">
           <h2>Home</h2>
           <p>Front-end project 4 page application created with React.</p>
           <ul className = "list-group">
               <li className = "list-group-item"><strong>Register:</strong> Allows you to register stores info into local storage</li>
               <li className = "list-group-item"><strong>Login:</strong> Checks if you email and password is registered </li>
               <li className = "list-group-item"><strong>Display:</strong> Display all items, also allows to edit and delete items</li>
                <li className = "list-group-item"><strong>Bonus:</strong> Added login validation. won't register empty users, and won't allow to have the same email</li>
           </ul>
           <a className="badge badge-primary mt-2" href="https://github.com/ArnasDickus/enigma-assignment" target = "_blank" rel = 'noopener noreferrer'>Github</a>
        </Container>
        )
    }
}

export default Home;