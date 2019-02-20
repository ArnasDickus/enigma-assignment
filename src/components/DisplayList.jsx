import React from 'react'

export const DisplayList = (props) => {
  return (
    <div className = "mt-4">
        <li className="list-group-item">Email: {props.email} <br /> Password: {props.password}</li>  
    </div>
  )
}

