import React, {useState, ChangeEvent}  from 'react'
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './styles.css';

const Login: React.FC = () => {
  const [userEmail, setUserEmail] = useState<String>("");
  const [userData, setUserData] = useState({ 
    userEmail: '',
    userPassword: ''
  })

  function handleLogin() {
    alert('Logado com sucesso!');
    axios.get(`http://localhost:3333/users/${userEmail}`)
    .then( response => {
       const [ userEmail, userPassword ] = response.data;

       setUserData({
         userEmail,
         userPassword
       })
    } 
    )

    console.log(userData);
  };

  function setEmail(event : ChangeEvent<HTMLInputElement>){
    const value = event.target.value;
    
    setUserEmail(event.target.value);
  }

  return (
    <div className="box">
      <form className="form">
        <span className="text-center">login</span>
        <div className="input-container">
          <input onChange={setEmail} type="text" />
          <label >Usuário</label>		
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