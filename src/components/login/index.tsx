import React, {useState, ChangeEvent, FormEvent}  from 'react'
import {FiLogIn} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

interface userData{
  useremail: string,
  userpassword: string
}

const Login: React.FC = () => {
  const [userEmail, setUserEmail] = useState<String>('');
  const [userPassword, setUserPassword] = useState<String>('');
  const [userDataApi, setUserDataApi] = useState<userData>();

  const history = useHistory();

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

        return alert('Usuário ou senha invalidos');
      });
  };

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

          <Link to='/'>
            <button type="submit" className="btn">Sair</button> 
          </Link>   
        </div>   

      </form>
    </div>
  );
};

export default Login;