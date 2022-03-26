import React, { useContext ,useEffect, useState } from 'react';
import AppContext from "../context/AppContext";
import whiteHeartIcon from '../assets/whiteHeartIcon.svg';
import blackHeartIcon from '../assets/blackHeartIcon.svg';


function FavoriteCard({movie, userEmail, isShownInfo}) {

  const [favorite, setFavorite] = useState(false)
  const { setFavorites, favorites } = useContext(AppContext)

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem(userEmail));
    if(movies && movies.find((el) => el.id === movie.id)) setFavorite(!favorite)
  }, [])

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem(userEmail));
    if(movies && movies.find((el) => el.id === movie.id)) setFavorite(!favorite)
  }, [favorites])

  const handleFavorite = (movie, userEmail) => {
    if(!localStorage.getItem(userEmail)) {
      setFavorite(!favorite)
      localStorage.setItem(userEmail, JSON.stringify([movie]))
      setFavorites()
    }
    else {
      const movies = JSON.parse(localStorage.getItem(userEmail));
      if(!movies.find((el) => el.id === movie.id)){
        setFavorite(!favorite)
        localStorage.setItem(userEmail, JSON.stringify([...movies, movie]))
        setFavorites()
      }
      else {
        const movies = JSON.parse(localStorage.getItem(userEmail));
        setFavorite(!favorite);
        localStorage.setItem(userEmail, JSON.stringify(movies.filter((el) => el.id !== movie.id)));
        setFavorites()
      }
    }
  }

  return (
    <div>
      <input
          type="image"
          onClick={ () => handleFavorite(movie, userEmail) }
          src={ favorite ? blackHeartIcon : whiteHeartIcon }
          style={isShownInfo ? {width: '70px'} : {width: '30px'}}
          alt="botao de favoritar em forma de coração"
        />
    </div>
  );
}


export default FavoriteCard;