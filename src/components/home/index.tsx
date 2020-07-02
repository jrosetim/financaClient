import React, {useEffect, FormEvent, useState, ChangeEvent, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom'
import api  from '../../services/api'
import AuthContext from '../context/authContext'

import './styles.css';

interface userData{
  useremail: string,
  userpassword: string
}

const Home: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [userDataApi, setUserDataApi] = useState<userData>();
  const {login, logged, userData} = useContext(AuthContext);

  const history = useHistory();

  useEffect( () => {
    if (logged){
      history.push('/userpage');
    }
  } ,[logged])
  
  const handleSubmitLogin = async (event : FormEvent) => {
    event.preventDefault();

    //await login(userEmail, userPassword);
    await login('jrosetim@gmail.com', '123');
  };

  function setEmail(event : ChangeEvent<HTMLInputElement>){
    setUserEmail(event.target.value);
  }

  function setPassword(event : ChangeEvent<HTMLInputElement>){
    setUserPassword(event.target.value);
  }  

  const HandleClickRegister = () => {
    history.push('/register');
  }

  return( 
    <div>
      
      <header className="header">
        <form action="submit" onSubmit={handleSubmitLogin}>
          <div className="topnav">
            <div className="login-container">
                <input onChange={setEmail} type="text" placeholder="E-mail" name="useremail" />
                <input onChange={setPassword} type="password" placeholder="Senha" name="userpassword" />
                <button  onClick={HandleClickRegister} type="submit">Cadastrar</button>
                <button type="button" onClick={handleSubmitLogin}>Login</button>
            </div>
          </div>
        </form>


        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Seja bem vindo ao FinanCAH</span>
            <span className="heading-primary-sub">Aqui seus sonhos podem se tornar realidade</span>
          </h1>
            <a href="#" className="btnSobre btnSobre-white btnSobre-animated">Sobre nós</a>
        </div>
      </header>
    </div>
  )
}

export default Home

