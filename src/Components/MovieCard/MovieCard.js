import React from "react";
import "./MovieCard.css";
import Rate from "../Rate";
import {Link} from 'react-router-dom'


const MovieCard = ({ movie }) => {
  return (
    <Link to = {`/movies/${movie.id}`}
    >

    <div className="container">
      <div className="movie">
        <div className="movie-rating">
          <Rate rating={movie.rating} />
        </div>
        <div className="movie-img">
          <img src={movie.image} alt="movie picture" />
        </div>
        <div className="text-movie-cont">
          <div className="mr-grid">
            <div className="col1">
              <h2>{movie.name}</h2>
              <ul className="movie-gen">
                <p>{movie.date}</p>
              </ul>
            </div>
          </div>
          <div className="mr-grid summary-row">
            {/* <h5>SUMMARY</h5>
            <p>{movie.description}</p> */}
          </div>
          <div className="mr-grid action-row">
            <div className="col2">
              <div className="watch-btn">
                <h3>  Watch Movie </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>

  );
};

export default MovieCard;