import React from 'react';

import './styles.css'

const ComponentTest : React.FC = () => {

  return (

    <form action="/action_page">
      <div className="container">
      <h1>Registro</h1>
        <p>Preencha os campos para criar uma nova conta.</p>

        <label ><b>Nome</b></label>
        <input type="text" placeholder="Nome completo" name="username" id="email" required />


        <label ><b>Email</b></label>
        <input type="text" placeholder="E-mail" name="useremail" required />

        <label ><b>Password</b></label>
        <input type="password" placeholder="Senha" name="userpassword" required />

        <label ><b>Repeat Password</b></label>
        <input type="password" placeholder="Confirme a senha" name="psw-repeat" required />
        
        {/* <p>By creating an account you agree to our <a href="#">Terms  Privacy</a>.</p> */}

        <button type="submit" className="registerbtn">Cadastrar</button>
      </div>
      
      <div className="container signin">
        <p>Já tem uma conta? <a href="#">Entrar</a>.</p>
      </div>
    </form>    

  )
}

export default ComponentTest;
