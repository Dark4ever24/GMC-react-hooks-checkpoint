import React from 'react';
import {Card }from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Description(props) {
  let {movie}=props.location.state
    return (
        <div className="cardStyle">
  <Card style={{ width:'1900px' ,height:'1000px', backgroundColor:'black'}} >
  <Card.Img variant="top" src={props.location.state.poster} />
  <Card.Body>
    <Card.Title style = {{color:"red"}}><h3>{movie.title}</h3></Card.Title>
    <Card.Text  style ={{fontFamily:"sans-serif" , color:"grey" }}>{movie.description}
    </Card.Text>
  <div>
  <iframe width="560" height="315" src={movie.trailer} 
  title="YouTube video player" frameborder="0" allow="accelerometer;
   autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div><Link   style ={{backgroundColor: 'grey' , color:"black"}}   to='/'>Back</Link></div>
  </Card.Body>
</Card>
        </div>
    )
}

export default Description
