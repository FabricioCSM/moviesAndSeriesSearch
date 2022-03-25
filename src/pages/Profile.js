import React, { useContext } from "react";
import { Button } from 'react-bootstrap';
import Header from "../components/header";
import ReactLoading from 'react-loading';
import { useHistory } from 'react-router-dom';
import CardsFavorites from "../components/cardFavorites";
import AppContext from "../context/AppContext";

function Profile() {

  const { userName, userEmail } = useContext(AppContext)
  const history = useHistory();

  function backButnHandle(){
    history.push('/library');
  }

    return(
      <main>
        {userEmail ? (
          <>
            <Header />
            <Button onClick={ backButnHandle }>Voltar</Button>
            <CardsFavorites favoriteEmail={userEmail}/>
          </>
        ): <ReactLoading type={'spin'} color={'#2f4f4f'} height={'10%'} width={'10%'}  />}
        
      </main>
    )
}

export default (Profile);