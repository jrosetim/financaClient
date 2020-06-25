import React, {EventHandler, FormEvent, useState, ChangeEvent} from 'react';
import {Link, useHistory} from 'react-router-dom'
import api from '../../services/api'

import './styles.css'

const UserRegister: React.FC  = () => {
  const history = useHistory();

  const [dataResgister, setDataRegister] = useState({
    username: '',
    useremail: '',
    userpassword: '',
    usertelefone: ''
  });

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault();

    await  api.post('/users', dataResgister );

    alert('Cadastrado com sucesso!');

    history.push('/login');
  }

  const handleCancel = (event: FormEvent) => {
    event.preventDefault();
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = event.target

    setDataRegister({...dataResgister, [name]: value});
  }

  return (
    <div className="boxRegister">
      <form action="submit" className="formRegister">
        <div className="divTextCenterRegister">
          <span>Faça seu cadastro</span>
        </div>

        <div className="boxFieldsRegister">
          <label>Nome</label>
          <input name="username" onChange={handleInputChange} placeholder="Nome completo" type="text"></input>  
        </div> 

        <div className="boxFieldsRegister">
          <label>E-mail</label>
          <input name="useremail" onChange={handleInputChange} placeholder="E-mail" type="text"></input>  
        </div> 

        <div className="boxFieldsRegister">
          <label>Senha</label>
          <input name="userpassword" onChange={handleInputChange} placeholder="Senha" type="password"></input>  
        </div> 

        <div className="boxFieldsRegister">
          <label>Confirmar Senha</label>
          <input placeholder="Confirmar senha" type="password"></input>  
        </div> 

        <div className="boxFieldsRegister">
          <label>Telefone</label>
          <input name="usertelefone" onChange={handleInputChange} placeholder="Telefone" type="text"></input>  
        </div> 

        <div className="buttonsRegister">
          <button onClick={handleRegister}>Cadastrar</button>
          
          <Link to="/">
            <button type="submit" >Cancelar</button>
          </Link>
        </div>
      </form>
    </div>
  ) 
}

export default UserRegister;

