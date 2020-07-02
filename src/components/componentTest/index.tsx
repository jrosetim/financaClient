import React, {ChangeEvent, useContext} from 'react';
//import {useAuthUser} from '../context/authContext';
import TestComponent from './test';

import cep from 'cep-promise';

import './styles.css'

const ComponentTest : React.FC = () => {
  // const {authenticated} = useAuthUser();

  // console.log(authenticated);
 async function handleClick() {
    func1();
    await TestComponent();
    func1();
  }

  const func1 = () => {
    return console.log('func 1');
  }

  const func2 = () => {
    const response = cep(87005080);

    console.log(response);
    // try {
    //   console.log('func2');
    // } catch (err) {
    //   console.log(err);
    // }
  }


  // const consultaCep = (event: ChangeEvent<HTMLInputElement> ) =>{
  //   cep( event.target.value )
  //   .then( (resolve) =>{
  //     console.log(resolve);
  //   });
  // }

  return (
    //<label > teste {authenticated} </label>
    <button onClick={handleClick} >click</button>


    
    // <form action="/action_page">
    //   <div className="container">
    //   <h1>Registro</h1>
    //     <p>Preencha os campos para criar uma nova conta.</p>

    //     <label ><b>CEP</b></label>
    //     <input onChange={consultaCep} type="text" placeholder="Cep" name="cep" id="cep" required />


    //     <label ><b>Email</b></label>
    //     <input type="text" placeholder="E-mail" name="useremail" required />

    //     <label ><b>Password</b></label>
    //     <input type="password" placeholder="Senha" name="userpassword" required />

    //     <label ><b>Repeat Password</b></label>
    //     <input type="password" placeholder="Confirme a senha" name="psw-repeat" required />
        
    //     {/* <p>By creating an account you agree to our <a href="#">Terms  Privacy</a>.</p> */}

    //     <button type="submit" className="registerbtn">Cadastrar</button>
    //   </div>
      
    //   <div className="container signin">
    //     <p>Jรก tem uma conta? <a href="#">Entrar</a>.</p>
    //   </div>
    // </form>    

  )
}

export default ComponentTest;
