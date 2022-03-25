import React, { useContext, useEffect, useState } from "react";
import Header from "../components/header";
import Cards from "../components/cards";
import PaginationRender from "../components/pagination";
import { connect, shallowEqual, useSelector } from "react-redux";
import { getAllMoviesThunk } from '../actions';
import { useDispatch } from "react-redux";
import AppContext from "../context/AppContext";


function Library() {
  const dispatch = useDispatch();
  const {getMovies, moviesLoaded, userEmail, searchKey, getSearchKeyWord } = useContext(AppContext)

  const { movies } = useSelector(state => ({
    movies: state.exhibitions.movies,
  }), shallowEqual);

  useEffect(() => {
    getMovies(movies)
  }, [movies])

  useEffect(() => {
    dispatch(getAllMoviesThunk())
    getSearchKeyWord('')
    getMovies(movies)
  }, [])

  return(
    <main>
      <Header />
      {searchKey ? <h2>Resultado da Pesquisa de: {`${searchKey}`}</h2> : null}
      <Cards emailUser={userEmail} moviesLoad={moviesLoaded}/>
      {/* <PaginationRender /> */}
    </main>
  )
}

const mapStateToProps = (state) => ({
  movies: state.exhibitions.movies,
  search: state.exhibitions.search,
})

export default connect(mapStateToProps)(Library);
