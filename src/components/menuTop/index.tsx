import React from 'react';
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

import './styles.css'


const MenuTop: React.FC = () =>{
  const history = useHistory();

  const toUserData = () => {
    history.push('/userdata');
  }

  const toHome = () =>{
    history.push('/');
  }

  const toLancamentos = () =>{
    history.push('/');
  }

  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn">Menu 
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a onClick={toUserData}>Dados pessoais</a>
          <a onClick={toLancamentos}>Lançamento de contas</a>
          <a onClick={toHome}>Sair</a>
        </div>
      </div> 
    </div>
  );
}

export default MenuTop;