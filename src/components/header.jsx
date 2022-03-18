import React, { useEffect, useState } from 'react';
import { Container, FormControl, FormGroup, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

// import profileIcon from '../images/profileIcon.svg';
// import searchIcon from '../images/searchIcon.svg';


function Header() {
  const history = useHistory();

  const [showSearch, setShowSearch] = useState(false);

  const [searchConfigs, setSearchConfigs] = useState({
    typedValue: '',
  });

  const [buttonState, setButtonState] = useState(true);

  useEffect(() => {
    const validateButton = () => {
      if (searchConfigs.typedValue !== '') {
        setButtonState(false);
      } else {
        setButtonState(true);
      }
    };
    validateButton();
  }, [searchConfigs]);

  const handleChange = ({ target }) => {
    setSearchConfigs({
      typedValue: target.value,
    });
  };

  const handleBtnClick = () => {
    const { typedValue } = searchConfigs;
    
  };

  return (
    <Navbar bg="success" expand="sm">
      <Container>
        <Link to="/profile">
          <img
            // src={ profileIcon }
            alt="icone de perfil"
          />
        </Link>
   
        <Navbar.Toggle
          onClick={ () => setShowSearch(!showSearch) }
          aria-controls="basic-navbar-nav"
        >
          <img
            // src={ searchIcon }
            alt="icone de busca"
            data-testid="search-top-btn"
          />
        </Navbar.Toggle>

        { showSearch && (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <FormGroup>
                <FormControl
                  placeholder="Search recipe"
                  data-testid="search-input"
                  onChange={ handleChange }
                />
              </FormGroup>
              
              <Button
                disabled={ buttonState }
                data-testid="exec-search-btn"
                type="button"
                variant="success"
                onClick={ handleBtnClick }
              >
                Search
              </Button>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
}

export default Header;