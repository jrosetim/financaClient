import React, {useEffect, FormEvent, useState, ChangeEvent} from 'react';
import {Link, useHistory} from 'react-router-dom'
import api  from '../../services/api'

import './styles.css';

interface userData{
  useremail: string,
  userpassword: string
}

const Home: React.FC = () => {
  const [userEmail, setUserEmail] = useState<String>('');
  const [userPassword, setUserPassword] = useState<String>('');
  const [userDataApi, setUserDataApi] = useState<userData>();
  
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem('token', '');
  }, []);

  const handleSubmitLogin = async (event : FormEvent) => {
    event.preventDefault();

    await api.get(`/users/${userEmail}`)
      .then((resolve) => {
        setUserDataApi(resolve.data);    

        if (userEmail === resolve.data.useremail && userPassword === resolve.data.userpassword){
          localStorage.setItem('token', 'true');
          history.push('/userpage');
  
          return console.log(`Seja bem vindo ${resolve.data.useremail}`);
        }

        return alert('Usuário ou senha inválidos');
      });
  };

  function setEmail(event : ChangeEvent<HTMLInputElement>){
    setUserEmail(event.target.value);
  }

  function setPassword(event : ChangeEvent<HTMLInputElement>){
    setUserPassword(event.target.value);
  }  

  return( 
    <div>
      
      <header className="header">
        <form action="submit" onSubmit={handleSubmitLogin}>
          <div className="topnav">
            <div className="login-container">
              <form action="/action_page">
                <input onChange={setEmail} type="text" placeholder="E-mail" name="useremail" />
                <input onChange={setPassword} type="password" placeholder="Senha" name="userpassword" />
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        </form>


        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Seja bem vindo ao FinanCAH</span>
            <span className="heading-primary-sub">Aqui seus sonhos podem se tornar realidade</span>
          </h1>
          <Link to="/login">
            <a href="#" className="btnSobre btnSobre-white btnSobre-animated">Sobre nós</a>
          </Link> 
        </div>
      </header>
    </div>
  )
}

export default Home

