import React, { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import profileIcon from '../assets/profileIcon.svg';
import SearchBar from './searchBar';
import './header.css'


function Header() {
  const history = useHistory();

  const [warning, setWarning] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const { path } = useRouteMatch();

  const [searchConfigs, setSearchConfigs] = useState('');

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

  useEffect(() => {
    if(path === '/profile') {
      setIsProfile(true)
    }
  }, []);

  const handleChange = ({ target }) => {
    setSearchConfigs(target.value);
  };

  function backButnHandle(){
    history.push('/library');
  }

  const handleBtnClick = () => {
    history.push('/profile');
    
  };


  
  return (
    <div>
      <header className='py-4 bg-dark text-white header' style={{width: '100%',display: 'flex', flexDirection: 'row', alignContent: 'space-around'}}>
      {isProfile ? <Button className="btn btn-warning backBtn" onClick={ backButnHandle }>Voltar</Button> : null}
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start' >
          
          <button className='nav-link text-secondary' style={{borderRadius: '30px'}}
            onClick={ handleBtnClick}
          >
            <img
              src={ profileIcon }
              alt="icone de perfil"
              style={{margin: '1px'}}
            />
            Perfil
          </button>
        </div>
        <SearchBar />
        <div className='d-flex align-items-center justify-content-center' style={{marginLeft: '70%'}}>
          <button className="btn btn-warning" onClick={ () => setWarning(true) }>
            Log Out
          </button>
        </div>
      </header>

      {warning && <div className='modal-content rounded-4 shadow'>
          <div className='modal-body p-4 text-center'>
            <h5 className='mb-0'>Você tem certeza que gostaria de sair?</h5>
          </div>
          <div className='modal-footer flex-nowrap p-0'>
            <button className='btn btn-lg text-decoration-none col-6 m-0 rounded-0' onClick={() => history.push('/')}>SIM</button>
            <button className='btn btn-lg text-decoration-none col-6 m-0 rounded-0' onClick={() => setWarning(false)}>Voltar</button>
          </div>
          </div>
      }
    </div>
  );
}

export default Header;