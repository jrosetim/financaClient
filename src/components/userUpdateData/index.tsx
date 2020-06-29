import React, { useState, ChangeEvent, useEffect, FormEvent, KeyboardEvent} from 'react'
import cep from 'cep-promise';
import {useHistory} from 'react-router-dom';
import api from '../../services/api';

import './styles.css'

const UserUpdateData: React.FC = () => {
  const history = useHistory();
  const [insertData, setInsertData] = useState<boolean>(false);

  const [userAddress, setUserAddress] = useState({
    state: '',
    city: '',
    neighborhood: '',
    street: ''  
  })

  const [userData, setUserData] = useState({
    user:{
      userid:''
    },
    cpf: '',
    rg: '',
    gender: {
      genderid: '',
    },
    zipcode: '',
    state: '',
    city: '',
    neighborhood: '',
    street: ''  
  });

  useEffect( () => {
    setUserData({...userData, user:{userid:'2'}, gender:{genderid: '1'} })
    setInsertData(false);
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = event.target

    setUserData({...userData, [name]: value});
  }

  const handleCepKeyDown = async (event: KeyboardEvent) => {
    setInsertData(false);
    if ((event.key === 'Enter')){
      const {zipcode} = userData;

      await cep(zipcode).then( (resolve) =>{
        const {state, city, neighborhood, street} = resolve;

        setUserAddress({state, city, neighborhood, street})

        setUserData({...userData, state, city, neighborhood, street});

        console.log(userData);
      })
    }
  }

  const handleRegister = async (event : FormEvent ) => {
    event.preventDefault();
    setInsertData(true);

    if (insertData){
      await api.post('/person', userData, {headers: {'Access-Control-Allow-Origin': '*'}})
      .then( (resolve) => {
        console.log(resolve);
        history.push('/userpage')
      });
    }
  }

  const handleCancel = (event : FormEvent) =>{
    event.preventDefault();

    history.push('/userpage');
  }

  return (
    <form onSubmit={handleRegister}>
      <div className="container-userupdate">
      <h1>Registro</h1>
        <p>Preencha os campos para atualizar seu cadastro.</p>

        <label ><b>CPF</b></label>
        <input onChange={handleInputChange} type="text" placeholder="CPF" name="cpf" required />

        <label ><b>RG</b></label>
        <input onChange={handleInputChange} type="text" placeholder="RG" name="rg" />

        <label> <b>Genero</b> </label>
        <select name="genderid" >
          <option value="1">Masculino</option>
          <option value="2">Feminino</option>
          <option value="3">Outro</option>
        </select>

        <label ><b>CEP</b></label>
        <input onKeyDown={handleCepKeyDown} onChange={handleInputChange} type="text" placeholder="CEP" name="zipcode"/>

        <label ><b>Rua</b></label>
        <input onChange={handleInputChange} type="text" placeholder="Rua" name="street" id="street" value={userAddress.street} />

        <label ><b>Número</b></label>
        <input onChange={handleInputChange} type="text" placeholder="Número" name="addressnumber" />

        <label ><b>Bairro</b></label>
        <input onChange={handleInputChange} type="text" placeholder="Bairro" name="neighborhood" value={userAddress.neighborhood} />

        <label ><b>Cidade</b></label>
        <input onChange={handleInputChange} type="text" placeholder="Cidade" name="city" value={userAddress.city}/>

        <label ><b>Estado</b></label>
        <input onChange={handleInputChange} type="text" placeholder="Estado" name="state" value={userAddress.state} />
        
        <button type="submit" className="updatebtn">Atualizar</button>
        <button onClick={handleCancel}  className="updatebtn">Cancelar</button>
        
      </div>
      
      {/* <div className="container signin">
        <p>Já tem uma conta? <a href="/login">Entrar</a>.</p>
      </div> */}
    </form>    
  ) 

}

export default UserUpdateData;