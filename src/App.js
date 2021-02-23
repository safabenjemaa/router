import React, { useState } from "react";
import "./App.css";
import { movieData } from "./Components/movieData";
import Main from "./Components/Main";
import Header from "./Components/Header/Header"
import { Route, Switch } from "react-router-dom";
import MovieDesc from './Components/MoviesDescription/MovieDesc';




function App() {
  const [movies, setMovies] = useState(movieData);
  const [search, setSearch] = useState("");
  const [searchRate, setSearchRate] = useState(0);

  const AddNewMovie = (x) => {
    setMovies([...movies, x]);
  };

  return (
    <div className="App">
      <Header
        setSearch={setSearch}
        searchRate={searchRate}
        setSearchRate={setSearchRate}
      />
      <Switch>
      <Route exact path="/" render={(props) => ( <Main  {...props} movies={movies} 
        movies={movies.filter(
          (el) =>
            el.name.toLowerCase().includes(search.toLowerCase().trim()) &&
            el.rating >= searchRate
        )}
        AddNewMovie={AddNewMovie}
      />)}/>
        
                  <Route path="/movies/:id" render={(props)=> <MovieDesc movies={movies} {...props} />}/>

      </Switch>
     
    </div>
  );
}

export default App;