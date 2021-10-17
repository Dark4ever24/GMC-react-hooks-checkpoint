import React, { useState} from 'react';
import '../App.css';
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import FilterbyName from "./FilterbyName";
import FilterbyRating from "./FilterbyRating";


 const Home = () => {
const [movies, setMovies] = useState([    
    {
        "title": "Rick and morty",
        "year": "2013",
        "poster": "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ebERxnewYlO0yfHwZsw6yAHaLH%26pid%3DApi&f=1",
        "trailer": "https://www.youtube.com/embed/_uUcMwsR5hg",
        "description":"Rick and Morty is the Emmy award-winning half-hour animated hit comedy series on Adult Swim that follows a sociopathic genius scientist who drags his inherently timid grandson on insanely dangerous adventures across the universe.",  
        "rate":"5"
  },   
  {
      "title": "MR.robot",
      "year": "2015",
      "poster": "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffontmeme.com%2Fimages%2Fmr.-robot-poster.jpg&f=1&nofb=1",
      "trailer": "https://www.youtube.com/embed/xIBiJ_SzJTA",
        "description":"Mr.Robot is an American drama thriller television series created by Sam Esmail for USA Network. It stars Rami Malek as Elliot Alderson, a cybersecurity engineer and hacker with social anxiety disorder and clinical depression. Elliot is recruited by an insurrectionary anarchist known as Mr. Robot, played by Christian Slater, to join a group of hacktivists called fsociety. The group aims to destroy all debt records by encrypting the financial data of E Corp, the largest conglomerate in the world.",
      "rate":"5"
    },
  {
      "title": "Bojack Horseman",
      "year": "2014",
      "poster": "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.senscritique.com%2Fmedia%2F000018671827%2Fsource_big%2FBo_Jack_Horseman.jpg&f=1&nofb=1",
      "trailer": "https://www.youtube.com/embed/i1eJMig5Ik4",
    "description":"Personality. A curmudgeon described by his ex-girlfriend as a self-pitying masochist, BoJack Horseman is bitter, depressed, self-loathing, narcissistic, and self-destructive. BoJack is often bad-tempered and irritable, with little patience for a lot of people around him",
      "rate":"4"
    },
  {
      "title": "[The matrix]",
      "year": "1999",
      "poster": "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FdXNAPwY7VrqMAo51EKhhCJfaGb5.jpg&f=1&nofb=1",
      "trailer": "https://www.youtube.com/embed/vKQi3bBA1y8",
        "description":"The film describes a future in which reality perceived by humans is actually the Matrix, a simulated reality created by sentient Machines in order to pacify and subdue the human population while their bodies' heat and electrical activity are used as an energy source.",
      "rate":"3"
    },
    {
      "title": "Straight Outta Compton",
      "year": "2015",
      "poster": "//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.blackfilm.com%2Fread%2Fwp-content%2Fuploads%2F2015%2F06%2FStraight-Outta-Compton-final-poster.jpg&f=1&nofb=1",
      "trailer": "https://www.youtube.com/embed/oyoew4T74_w",
        "description":"Straight Outta Compton is a 2015 American biographical drama film directed by F. Gary Gray, depicting the rise and fall of the gangsta rap group N.W.A and its members Eazy-E, Ice Cube, Dr. Dre, MC Ren, and DJ Yella. ... 2 on the US Billboard 200 album chart a week prior to the film's release.",
      "rate":"5"
    },
    {
      "title": "the queen's gambit",
      "year": "2020",
      "poster": "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftomandlorenzo.com%2Fwp-content%2Fuploads%2F2020%2F09%2FThe-Queens-Gambit-Anya-Taylor-Joy-Netflix-Poster-Official-Trailer-TV-Previews-Tom-Lorenzo-Site-2.jpg&f=1&nofb=1",
      "trailer": "https://www.youtube.com/embed/oZn3qSgmLqI",
    "description":"Overview. The Queen's Gambit follows the life of an orphan chess prodigy, Elizabeth Harmon, during her quest to become an elite chess player while struggling with emotional problems, drugs and alcohol dependency. The title of the series refers to a chess opening of the same name.",
      "rate":"4"
    },
    {
      "title": "The 100",
      "year": "2019",
      "poster": "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fdownandnerdypodcast.com%2Fwp-content%2Fuploads%2F2019%2F03%2F100-the7460907241077214293-e1551987102621.jpg%3Ffit%3D750%252C1050%26ssl%3D1&f=1&nofb=1",
      "trailer": "https://www.youtube.com/embed/ia1Fbg96vL0",
        "description":"Set ninety-seven years after a nuclear war has destroyed civilization, when a spaceship housing humanity's lone survivors sends one hundred juvenile delinquents back to Earth, in hopes of possibly re-populating the planet. The series is set 97 years after a devastating nuclear war wiped out almost all life on Earth.",
      "rate":"4"
    },
  ]);
const add=(newFilm)=>{
    setMovies(movies=>[...movies,newFilm]);
  };
  const inputSearch=(input)=>{
    setMovies(movies.filter(m => m.title.toLowerCase().includes(input)));
  };
  const rating=(rate)=>{
    setMovies(movies.filter(mo=>mo.rate>=rate));
  };
return (
    <div className='App'>
    <nav>  
    <FilterbyName 
    inputSearch={inputSearch}/>
    <div>
      <h2   style = {{color:"purple"}}
        >search by rate</h2>
    </div>
    <FilterbyRating rating={rating}/>
    </nav>
    <MovieList movies={movies}/>
    <AddMovie add={add}/>
    </div>
)
}

export default Home
