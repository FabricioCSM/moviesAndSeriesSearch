import React, { useEffect, useState } from 'react';
import whiteHeartIcon from '../assets/whiteHeartIcon.svg';
import blackHeartIcon from '../assets/blackHeartIcon.svg';


function FavoriteCard({movie, userEmail}) {

  const [favorite, setFavorite] = useState(false)

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem(userEmail));
    if(movies && movies.find((el) => el.id === movie.id)) setFavorite(!favorite)
  }, [])

  const handleFavorite = (movie, userEmail) => {
    if(!localStorage.getItem(userEmail)) {
      setFavorite(!favorite)
      localStorage.setItem(userEmail, JSON.stringify([movie]))
    }
    else {
      const movies = JSON.parse(localStorage.getItem(userEmail));
      if(!movies.find((el) => el.id === movie.id)){
        setFavorite(!favorite)
        localStorage.setItem(userEmail, JSON.stringify([...movies, movie]))
      }
      else {
        const movies = JSON.parse(localStorage.getItem(userEmail));
        setFavorite(!favorite);
        localStorage.setItem(userEmail, JSON.stringify(movies.filter((el) => el.id !== movie.id)));
      }
    }
  }

  return (
    <div>
      <input
          type="image"
          onClick={ () => handleFavorite(movie, userEmail) }
          src={ favorite ? blackHeartIcon : whiteHeartIcon }
          style={{width: '30px'}}
          alt="botao de favoritar em forma de coração"
        />
    </div>
  );
}


export default FavoriteCard;