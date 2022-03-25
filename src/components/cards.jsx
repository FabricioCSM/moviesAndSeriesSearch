
import React, { useContext, useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import AppContext from "../context/AppContext";
import FavoriteCard from './favoriteCard';

function Cards() {

  const {moviesLoaded, userEmail } = useContext(AppContext)

  return (
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
        >
          <Card.Img
            style={ { width: '90%', alignSelf: 'center', marginTop: '-9px' } }
            variant="top"
            src={window.innerWidth > 600 ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}` : `https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
          />
          <Card.Body>
            <Card.Title
              style={ { color: 'black', fontSize: '90%' } }
            >
              { movie.title }
            </Card.Title>
          </Card.Body>
          <FavoriteCard movie={movie} userEmail={userEmail}/>
        </Card>
      )) : <ReactLoading type={'spin'} color={'#2f4f4f'} height={'10%'} width={'10%'}  />}  

    </Row>
  );
}



export default (Cards);