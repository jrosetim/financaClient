import React, {EventHandler, FormEvent} from 'react';
import {Link} from 'react-router-dom'
import './styles.css'

const UserRegister: React.FC  = () => {

  const handleRegister = (event: FormEvent) => {
    event.preventDefault();
  }

  const handleCancel = (event: FormEvent) => {
    event.preventDefault();
  }

  return (
    <div className="boxRegister">
      <form action="submit" className="formRegister">
        <div className="divInputsRegister">
          <span className="text-centerRegister">Faça seu cadastro</span>
          <label className="labelRegister">
            E-mail
            <input className="inputRegister" placeholder="E-mail" type="text"></input>  
          </label>
          

          <label className="labelRegister">
            Senha
            <input className="inputRegister" placeholder="Senha" type="password"></input>  
          </label>
          
          <label className="labelRegister">
            Telefone
            <input className="inputRegister" placeholder="Telefone" type="text"></input>
          </label>
          

          <button className="btnRegister" onClick={handleRegister}>Cadastrar</button>
          
          <Link to="/">
            <button className="btnRegister" type="submit" >Cancelar</button>
          </Link>
        </div>
      </form>
    </div>
  ) 
}

export default UserRegister;

