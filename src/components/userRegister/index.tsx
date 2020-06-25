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
        <div className="divTextCenterRegister">
          <span>Faça seu cadastro</span>
        </div>

        <div className="boxFieldsRegister">
          <label>Nome</label>
          <input placeholder="Nome completo" type="text"></input>  
        </div> 

        <div className="boxFieldsRegister">
          <label>E-mail</label>
          <input placeholder="E-mail" type="text"></input>  
        </div> 

        <div className="boxFieldsRegister">
          <label>Senha</label>
          <input placeholder="Senha" type="text"></input>  
        </div> 

        <div className="boxFieldsRegister">
          <label>Confirmar Senha</label>
          <input placeholder="Confirmar senha" type="text"></input>  
        </div> 

        <div className="boxFieldsRegister">
          <label>Telefone</label>
          <input placeholder="Telefone" type="text"></input>  
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

