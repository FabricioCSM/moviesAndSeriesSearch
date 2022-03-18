import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { getMoviesBySearchThunk, getAllMoviesThunk } from '../actions';


function SearchBar() {

  const dispatch = useDispatch();

  const [search, setSearch] = useState({
    typedValue: '',
  });

  const handleChange = ({ target }) => {
    setSearch({
      typedValue: target.value,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if(!search.typedValue){
      dispatch(getAllMoviesThunk());
    }
    else dispatch(getMoviesBySearchThunk(encodeURIComponent(search.typedValue)));
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

export default SearchBar;