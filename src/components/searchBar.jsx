import React, { useContext, useState } from 'react';
import { useDispatch } from "react-redux";
import { connect, shallowEqual, useSelector } from "react-redux";
import { getMoviesBySearchThunk, getAllMoviesThunk } from '../actions';
import AppContext from "../context/AppContext";


function SearchBar() {

  const dispatch = useDispatch();
  const {getMovies, getSearchKeyWord } = useContext(AppContext)

  const [search, setSearch] = useState('');

  const { movies } = useSelector(state => ({
    movies: state.exhibitions.movies,
  }), shallowEqual);

  const handleChange = ({ target }) => {
    setSearch(target.value);
    console.log(search)
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if(search.lenght === 0){
      dispatch(getAllMoviesThunk());
      getMovies(movies);
      getSearchKeyWord('')
    }
    else {
      console.log(search)
      dispatch(getMoviesBySearchThunk(encodeURIComponent(search)));
      getMovies(movies);
      getSearchKeyWord(search)
    }
  };

  return (

    <div className="d-flex align-items-center justify-content-center">
      <div className='d-flex align-items-center justify-content-lg-center'style={{width: '100%',display: 'flex', flexDirection: 'row'}}>
        <form className="col-12" style={{width: '90%',display: 'flex', flexDirection: 'row'}}>
          <input
            type="search"
            placeholder="Search movies or Keywords"
            className="form-control form-control-dark"
            onChange={handleChange}
            aria-label="Search"
          />
          <button className="btn btn-warning" onClick={ handleSearch }>Search</button>
        </form>
      </div>
    </div>

  );
}

const mapStateToProps = (state) => ({
  movies: state.exhibitions.movies,
  search: state.exhibitions.search,
})

export default connect(mapStateToProps)(SearchBar);