import React, {createContext, useState} from 'react';
import api from '../../services/api';

interface AuthContextData {
  logged: boolean;
  token: string;
  login(userEmail: string, password: string): Promise<void>;
  personData: PersonData;
}

interface PersonData {
  personid: number;
  name: string;
  email: string;
  password: string;
  cpf: string;
  rg: string;
  gender:{ genderid: number}
  street: string;
  neighborhood: string;
  zipcode: string;
  city: string;
  state: string;
  addressnumber: string;
  personstate: string;
}

//iniciando com null
//const AuthContext =  createContext<AuthContextData | null >(null);

//iniciando com objeto vazio.
const AuthContext =  createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) =>{
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');
  const [person, setPerson] = useState<PersonData>({} as PersonData);
  
  async function login(userEmail: string, password: string){

    try {
      const response = await api.get(`/person/${userEmail}`);

      if (userEmail === response.data.email && password === response.data.password){
        setToken('true');
        setIsLogged(true);

        const {
          personid,
          name,
          email,
          password,
          cpf, 
          rg,
          gender,
          street,
          neighborhood,
          zipcode,
          city,
          state,
          addressnumber,
          personstate  
        } = response.data;
        
        setPerson({
          personid,
          name,
          email,
          password,
          cpf, 
          rg,
          gender,
          street,
          neighborhood,
          zipcode,
          city,
          state,
          addressnumber,
          personstate  
        })
      }else{
        setIsLogged(false);
        setToken('');
      }      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={
      {logged: isLogged, 
       token: '', 
       login, 
       personData: person
      }
    }>
      {children}
    </AuthContext.Provider> 
  )
}

export default AuthContext;