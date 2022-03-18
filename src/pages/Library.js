import React, { useEffect, useState } from "react";
import ReactLoading from 'react-loading';
import { connect, shallowEqual, useSelector } from "react-redux";
import Header from "../components/header";

function Library() {

  const { movies } = useSelector(state => ({
    movies: state.exhibitions.movies,
  }), shallowEqual);

  return(
    <main>
      <Header />
      {movies.length ? movies[0].results.map((movie, index) => (<p key={index}>{movie.title}</p>)) : <ReactLoading type={'spin'} color={'#2f4f4f'} height={'10%'} width={'10%'}  />}
    </main>
  )
}

const mapStateToProps = (state) => ({
  movies: state.exhibitions.movies,
})

export default connect(mapStateToProps)(Library);
