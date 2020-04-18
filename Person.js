import React from 'react';
import './Item.css'
const Person = props =>
(
    
      <div className="example">
          <img src={props.img}></img>

          <h1>{props.title} {props.name}</h1>
        <p>{props.email}</p>
          
      </div>  


)

export default Person