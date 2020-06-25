import React, {useState, ChangeEvent, FormEvent}  from 'react'
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import {isAuthenticated} from '../../auth/auth'

import './styles.css';

interface userData{
  useremail: string,
  userpassword: string
}

const Login: React.FC = () => {
  const [userEmail, setUserEmail] = useState<String>('');
  const [userPassword, setUserPassword] = useState<String>('');
  const [userDataApi, setUserDataApi] = useState<userData>();

  const handleSubmitLogin = async (event : FormEvent) => {
    event.preventDefault();

    await api.get(`/users/${userEmail}`)
      .then((resolve) => {
        setUserDataApi(resolve.data);    

        validLogin(resolve.data.useremail, resolve.data.userpassword);
      });

      console.log(localStorage.getItem('success'));
  };

  const validLogin = (userEmailParam: String, userPasswordParam: String) => {    
    if (userDataApi) {
      if (userEmail === userEmailParam && userPassword === userPasswordParam){
        localStorage.setItem('success', 'true');
        return console.log(`Seja bem vindo ${userDataApi?.useremail}`);
      }
      
      localStorage.setItem('success', '');
      return console.log("Usuário ou senha incorretos");
    }
  }

  function setEmail(event : ChangeEvent<HTMLInputElement>){
    setUserEmail(event.target.value);
  }

  function setPassword(event : ChangeEvent<HTMLInputElement>){
    setUserPassword(event.target.value);
  }

  return (
    <div className="box">
      <form className="form" onSubmit={handleSubmitLogin}>
        <span className="text-center">login</span>
        <div className="input-container">
          <input onChange={setEmail} type="text" />
          <label>Usuário</label>        
        </div>
        <div className="input-container">        
          <input onChange={setPassword} type="password" />
          <label>Senha</label>
        </div>

        <div className="actionsButtons">
          <button type="submit" className="btn">Entrar</button> 
          
          <Link to="userpage" />

          <Link to='/'>
            <button type="submit" className="btn">Sair</button> 
          </Link>   
        </div>   

      </form>
    </div>
  );
};

export default Login;