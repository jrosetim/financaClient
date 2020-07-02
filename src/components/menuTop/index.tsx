import React, {useContext, useReducer} from 'react';
import {useHistory} from 'react-router-dom'
import AuthContext from '../context/authContext'

import './styles.css'

const MenuTop: React.FC = () =>{
  const history = useHistory();
  const {login, userData} = useContext(AuthContext);

  const toUserData = () => {
    console.log(userData.username);
    history.push('/userdata');
  }

  const toHome = () =>{
    login('', '');
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
      <div>
      <label className="userName"> {userData.username} </label> 
      </div>
    </div>
  );
}

export default MenuTop;