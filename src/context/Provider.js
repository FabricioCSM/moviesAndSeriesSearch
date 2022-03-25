import React, { useState } from 'react';

import AppContext from './AppContext';

function Provider({children}) {
  const [userEmail, setUserEmail] = useState('');
  const [name, setName] = useState('');
  const [moviesLoaded, setMoviesLoaded] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  function getMovies(movies) {
    setMoviesLoaded(movies)
  }

  function getUserEmail(email) {
    setUserEmail(email)
  }

  function getUserName(userName) {
    setName(userName)
  }

  function getSearchKeyWord(search) {
    setSearchKey(search)
  }

  const contextValue = {
    getMovies,
    getUserEmail,
    getUserName,
    getSearchKeyWord,
    searchKey,
    userEmail,
    name,
    moviesLoaded
  }

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider