import React, { useState, ChangeEvent, useEffect, FormEvent, KeyboardEvent, useContext} from 'react'
import cep from 'cep-promise';
import {useHistory} from 'react-router-dom';
import api from '../../services/api';
import AuthContext from '../context/authContext'

import './styles.css'

interface IGender {
  genderid: number,
  description: string
}

interface IPerson {
  personid: number,
  user:{
    userid:number
  },
  cpf: string,
  rg: string,
  gender: {
    genderid: number,
  },
  zipcode: string,
  state: string,
  city: string,
  neighborhood: string,
  street: string,
  addressnumber:string 
}

const UserUpdateData: React.FC = () => {
  const history = useHistory();
  const [insertData, setInsertData] = useState<boolean>(false);
  const {personData, userData, getPersonByUser} = useContext(AuthContext);
  const {userid} = personData.user;
  const {genderid} = personData.gender;  
  const [gender, setGender] = useState<[IGender]>([ {genderid: -1, description:''}]);

  const [userAddress, setUserAddress] = useState({
    state: '',
    city: '',
    neighborhood: '',
    street: ''  
  })

  // const [userDataLocal, setUserData] = useState({
  //   personid: -1,
  //   user:{
  //     userid:-1
  //   },
  //   cpf: '',
  //   rg: '',
  //   gender: {
  //     genderid: -1,
  //   },
  //   zipcode: '',
  //   state: '',
  //   city: '',
  //   neighborhood: '',
  //   street: '',
  //   addressnumber:''  
  // });

  const [userDataLocal, setUserData] = useState<IPerson>({} as IPerson);

  useEffect( () => {
    setUserData({
      personid: personData.personid,
      user:{userid},
      cpf: personData.cpf,
      rg: personData.rg,
      gender:{genderid},
      zipcode: personData.zipcode,
      state: personData.state,
      city: personData.city,
      neighborhood: personData.neighborhood,
      street: personData.street,
      addressnumber: personData.addressnumber
    })

    setInsertData(false);
  }, []);

  useEffect( () => {
    (
      async () => {
        await api.get('/gender').then( resolve => {
          setGender(resolve.data);
        })
      }
    )();
  } , [] )  

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = event.target

    setUserData({...userDataLocal, [name]: value});
  }

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) =>{
    const {name, value} = event.target

    console.log(`selectChange ${event.target}`);

    setUserData({...userDataLocal, [name]: value});
  }

  const handleCepKeyDown = async (event: KeyboardEvent) => {
    setInsertData(false);
    if ((event.key === 'Enter')){
      const {zipcode} = userDataLocal;

      await cep(zipcode).then( (resolve) =>{
        const {state, city, neighborhood, street} = resolve;

        setUserAddress({state, city, neighborhood, street})

        setUserData({...userDataLocal, state, city, neighborhood, street});

        console.log(userDataLocal);
      })
    }
  }

  const handleRegister = async (event : FormEvent ) => {
    event.preventDefault();
    setInsertData(true);

    if (insertData){
      await api.put(`/person/${userDataLocal.personid}`, userDataLocal, {headers: {'Access-Control-Allow-Origin': '*'}})
      .then( (resolve) => {
        getPersonByUser(userid);
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
        <input onChange={handleInputChange} type="text" placeholder="CPF" name="cpf" required value={userDataLocal.cpf} />

        <label ><b>RG</b></label>
        <input onChange={handleInputChange} type="text" placeholder="RG" name="rg" value={userDataLocal.rg}/>

        {/* <label> <b>Genero</b> </label>
        <select name="genderid" >
          <option value="1">Masculino</option>
          <option value="2">Feminino</option>
          <option value="3">Outro</option>
        </select> */}

        <label> <b>Genero</b> </label>
        <select onChange={handleSelectChange} name="genderid" >
         {   
          gender.map( itens => (
            <option 
              key={itens.genderid} 
              value={itens.genderid}
            >{itens.description}</option>
           ) )
          
         } 
         </select>

        <label ><b>CEP</b></label>
        <input 
          onKeyDown={handleCepKeyDown} 
          onChange={handleInputChange} 
          type="text" 
          placeholder="CEP" 
          name="zipcode" 
          value={userDataLocal.zipcode}
        />

        <label ><b>Rua</b></label>
        <input 
          onChange={handleInputChange} 
          type="text" 
          placeholder="Rua" 
          name="street" 
          id="street" 
          value={userDataLocal.street} 
        />

        <label ><b>Número</b></label>
        <input 
          onChange={handleInputChange} 
          type="text" 
          placeholder="Número" 
          name="addressnumber" 
          value={userDataLocal.addressnumber}
        />

        <label ><b>Bairro</b></label>
        <input 
          onChange={handleInputChange} 
          type="text" 
          placeholder="Bairro" 
          name="neighborhood" 
          value={userDataLocal.neighborhood} 
        />

        <label ><b>Cidade</b></label>
        <input 
          onChange={handleInputChange} 
          type="text" 
          placeholder="Cidade" 
          name="city" 
          value={userDataLocal.city}
        />

        <label ><b>Estado</b></label>
        <input 
          onChange={handleInputChange} 
          type="text" 
          placeholder="Estado" 
          name="state" 
          value={userDataLocal.state} 
        />
        
        <button type="submit" className="updatebtn">Atualizar</button>
        <button onClick={handleCancel}  className="updatebtn">Cancelar</button>
        
      </div>
      
      {/* <div className="container signin">
        <p>JÃ¡ tem uma conta? <a href="/login">Entrar</a>.</p>
      </div> */}
    </form>    
  ) 

}

export default UserUpdateData;