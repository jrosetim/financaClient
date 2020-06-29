import React, {FormEvent, useState, ChangeEvent} from 'react';
import {useHistory} from 'react-router-dom'
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
    <form action="/action_page">
      <div className="container">
      <h1>Registro</h1>
        <p>Preencha os campos para criar uma nova conta.</p>

        <label ><b>Nome</b></label>
        <input onChange={handleInputChange} type="text" placeholder="Nome completo" name="username" id="email" required />


        <label ><b>Email</b></label>
        <input onChange={handleInputChange} type="text" placeholder="E-mail" name="useremail" required />

        <label ><b>Senha</b></label>
        <input onChange={handleInputChange} type="password" placeholder="Senha" name="userpassword" required />

        <label ><b>Confirma senha</b></label>
        <input type="password" placeholder="Confirme a senha" name="psw-repeat" required />

        <label ><b>Telefone</b></label>
        <input type="text" placeholder="Informe o telefone" name="usertelefone" required />


        {/* <p>By creating an account you agree to our <a href="#">Terms  Privacy</a>.</p> */}

        <button onClick={handleRegister} type="submit" className="registerbtn">Cadastrar</button>
      </div>
      
      <div className="container signin">
        <p>Já tem uma conta? <a href="/login">Entrar</a>.</p>
      </div>
    </form>    
  ) 
}

export default UserRegister;

