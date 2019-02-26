import React from 'react' ;
import PropTypes from 'prop-types'; 
import './Movie.css';

function Movie({title,poster}){
    return(
        <div>
            <MoviePoster poster={poster}/>
            <h3>{title}</h3>
        </div>
    )
}

    function MoviePoster({poster}){
        return(
            <img src={poster}/>
        )
    }
/*
Movie.PropTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

MoviePoster.PropTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string,isRequired
}
*/
export default Movie;