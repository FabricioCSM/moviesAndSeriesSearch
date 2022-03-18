import React, { useEffect, useState } from "react";
import { getAllMoviesThunk } from '../actions';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { signUser } from '../actions';

function Login() {

  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [buttonsSaveDisabled, setButtonsSaveDisabled] = useState(true);

  function loginUser() {
    dispatch(signUser(email,name));
    dispatch(getAllMoviesThunk());
    history.push('/library');
  }

  function onInputChange({target}) {

    target.name === 'name' ? setName(target.value) : setEmail(target.value)
  }

  useEffect(() => {
    function authenticateLogin(){
      if(name.length >= 3 && email.includes('@') && email.includes('.com')) {
        setButtonsSaveDisabled(false)
      }
      else setButtonsSaveDisabled(true)
    }

    authenticateLogin()
  }, [name, email, buttonsSaveDisabled])

  return(
    <Form>
      <Form.Group controlId="formBasicUser">
      <Form.Label>Username</Form.Label>
        <Form.Control
            data-testid="email-input"
            type="text"
            name="name"
            placeholder="username"
            onChange={ onInputChange }
          />
      </Form.Group>

      <Form.Group controlId="formBasicUser">
        <Form.Label>Email address</Form.Label>
          <Form.Control
            data-testid="email-input"
            type="email"
            name="email"
            placeholder="example@email.com"
            onChange={ onInputChange }
          />
      </Form.Group>
      <Button
        disabled={ buttonsSaveDisabled }
        className="inputButton"
        onClick={ loginUser }
      >
        Entrar
      </Button>
    </Form>
  )
}

export default Login;