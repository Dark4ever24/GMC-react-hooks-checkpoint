import React from 'react';
import {Card,Button} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


function MovieCard({movie}) {
  
  return (
    <div>
    <Card style={{ width: "350px" }}>
  <Card.Img variant="top" src={movie.poster} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>{movie.year}
    </Card.Text>
    <ReactStars
    value={movie.rate}
    count={5}
    edit={false}
    size={30}
    activeColor="purple"
  />
  <Link to={{ pathname: `/Description/${movie.title}`,
   state: {movie} }}>  
  <Button variant="primary">Watch Trailer</Button>
  </Link>
  </Card.Body>
</Card>
    </div>
  )
}

export default MovieCard

