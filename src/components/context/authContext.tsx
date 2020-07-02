import React, {createContext, useState, useContext, useEffect} from 'react';
import api from '../../services/api';

interface AuthContextData {
  logged: boolean;
  token: string;
  userData: UserData;
  login(userEmail: string, password: string): Promise<void>;
  personData: PersonData;
  getPersonByUser(useridParam : number): Promise<void>
}

interface UserData {
  userid: number;
  username: string;
  useremail: string;
  userpassword: string;
  userstatus: string;
  usertype: string;  
}

interface PersonData {
  personid: number;
  cpf: string;
  rg: string;
  gender:{ genderid: number}
  user:{userid: number}  
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
  const [token, setToken] = useState<string>('');
  const [user, setUser] = useState<UserData>({} as UserData);
  const [person, setPerson] = useState<PersonData>({} as PersonData);
  
  async function login(userEmail: string, password: string){
    try {
      const response = await api.get(`/users/${userEmail}`);

      if (userEmail === response.data.useremail && password === response.data.userpassword){
        setToken('true');
        const {userid, username,useremail,userpassword,userstatus,usertype} = response.data;
        
        setUser({userid, username, useremail, userpassword, userstatus, usertype})
        
        await getPersonByUser(response.data.userid);
      }else{
        setToken('');
      }      
    } catch (error) {
      console.log(error);
    }
  }

  async function getPersonByUser(useridParam : number) {
    try {
      const response = await api.get(`/person/${useridParam}`);

      const {
        personid, 
        cpf, 
        rg, 
        gender, 
        user,
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
        cpf, 
        rg,  
        gender,
        user,
        street, 
        neighborhood, 
        zipcode, 
        city, 
        state, 
        addressnumber, 
        personstate 
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={
      {logged: !!token, 
       token: '', 
       userData: user, 
       login, 
       personData: person,
       getPersonByUser
      }
    }>

      {children}
    </AuthContext.Provider> 
  )
}

export default AuthContext;