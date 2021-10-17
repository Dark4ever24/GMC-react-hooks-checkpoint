import React from 'react'
import MovieCard from "./MovieCard"


function MovieList({movies}) {
	return (
		<div  className='lsmovies' >
		{movies.map(m=><MovieCard movie={m}/>)  };      
		</div>
	);
};

export default MovieList;
