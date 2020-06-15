import React from 'react'
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import './styles.css';

const Login = () => {

  function handleLogin() {
    alert('Logado com sucesso!');
  };

  return (
    <div className="box">
      <form className="form">
        <span className="text-center">login</span>
        <div className="input-container">
          <input type="text" />
          <label>Usuário</label>		
        </div>
        <div className="input-container">		
          <input type="password" />
          <label>Senha</label>
        </div>

        <div className="actionsButtons">
          <button type="button" className="btn" onClick={handleLogin}>Entrar</button> 
        </div>
      </form>
    </div>
  );
};

export default Login;