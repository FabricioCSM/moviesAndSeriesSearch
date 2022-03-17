import React, { useEffect } from "react";
import { connect, shallowEqual, useSelector } from "react-redux";
import { getMoviesBySearchThunk } from '../actions';

function Login({getMoviesInit}) {

  useEffect(() => {
    getMoviesInit('king')
  }, []);

  const { movies } = useSelector(state => ({
    movies: state.exhibitions.movies,
  }), shallowEqual);

  return(
    <main>
      <h2>Login</h2>
      {movies[0].Search.map((movie, index) => (<p key={index}>{movie.Title}</p>))}
    </main>
  )
}

const mapStateToProps = (state) => ({
  movies: state.exhibitions.movies,
})

const mapDispatchToProps = (dispatch) => ({
  getMoviesInit: (search) => dispatch(getMoviesBySearchThunk(search)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);