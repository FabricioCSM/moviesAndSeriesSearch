
import React, { useContext, useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import AppContext from "../context/AppContext";
import FavoriteCard from './favoriteCard';
import './cards.css';
import { Button } from 'bootstrap';

function Cards() {

  const {moviesLoaded, userEmail } = useContext(AppContext)
  const [movieInfo, setMovieInfo] = useState()
  const [showMovieInfo, setShowMovieInfo] = useState(false)

  function handleMovieInfo(movie) {
    setMovieInfo(movie);
    setShowMovieInfo(true);
  }


  return (
    <main>
      <Row
        className="g-4"
        style={ { marginBottom: '80px', padding: '5%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' } }
      >
        {moviesLoaded.length ? moviesLoaded[0].results.map((movie, index) => (
          <Card
            bg="secondary"
            border="dark"
            key={ index }
            style={ { width: '12%', padding: '1%' } }
            // onClick={() => handleMovieInfo(movie)}
          >
            <Card.Img
              style={ { width: '90%', alignSelf: 'center', marginTop: '-9px' } }
              variant="top"
              src={window.innerWidth > 600 ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}` : `https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
              onClick={() => handleMovieInfo(movie)}
            />
            <Card.Body>
              <Card.Title
                style={ { color: 'black', fontSize: '90%' } }
                onClick={() => handleMovieInfo(movie)}
              >
                { movie.title }
              </Card.Title>
            </Card.Body>
            <FavoriteCard movie={movie} userEmail={userEmail} isShownInfo={false}/>
          </Card>
        )) : <ReactLoading type={'spin'} color={'#2f4f4f'} height={'10%'} width={'10%'}  />}  

      </Row>
      {showMovieInfo && (
      <main className='overlayMovie'>
        <div className='cardMovieDetails'>
          <button className="btn btn-warning" onClick={() => setShowMovieInfo(false)}>X</button>
          <div className='cardMovieInfo'>
            <div className='movieImage'>
              <img src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} />
            </div>
            <div className='movieInfoText'>
              <h2 className='movieTitle'>{movieInfo.title}</h2>
              <h3 className='movieOriginalTitle'>Título Original: {movieInfo.original_title}</h3>
              <br />
              <p className='movieOverview'>{movieInfo.overview}</p>
              <p className='movieRelease'><strong>Data de lançamento: </strong>{movieInfo.release_date.split('-').reverse().join('/')}</p>
              <p className='movieImdbRate'><strong>Nota no IMDB:</strong> {movieInfo.vote_average}</p>
            </div>
              <FavoriteCard movie={movieInfo} userEmail={userEmail} isShownInfo={true}/>
          </div>
        </div>
      </main>)}
    </main>
  );
}



export default Cards;