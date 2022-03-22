import React, { useEffect, useState } from "react";
import { connect, shallowEqual, useSelector } from "react-redux";
import Header from "../components/header";
import ReactLoading from 'react-loading';
import CardsFavorites from "../components/cardFavorites";

function Profile() {

  const [userEmail, setEmail] = useState([''])
  const [nameUser, setUserName] = useState([''])

  const { email, userName } = useSelector(state => ({
    email: state.user.email,
    userName: state.user.userName,
  }), shallowEqual);

  useEffect(() => {
    setEmail(email)
    setUserName(userName)
  }, [email])

    return(
      <main>
        {userEmail ? (
          <>
            <Header />
            
            <CardsFavorites favoriteEmail={userEmail}/>
          </>
        ): <ReactLoading type={'spin'} color={'#2f4f4f'} height={'10%'} width={'10%'}  />}
        
      </main>
    )
}

const mapStateToProps = (state) => ({
  email:  state.user.email,
  userName:  state.user.userName,
})

export default connect(mapStateToProps)(Profile);