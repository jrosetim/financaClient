import React, {useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import MenuLeft from '../menuLeft/index';
import AuthContext from '../context/authContext'

import './styles.css'

const UserPage: React.FC = () =>{
  const history = useHistory();
  const {logged} = useContext(AuthContext);

  // const handleClick = () =>{
  //   history.push('/');
  // }

  useEffect(() => {
    console.log('User Page ' + logged);
  }, [])  

  return (
    <div className="userPage">
      <header className="menutop">
        <MenuLeft />
      </header>
      {/* <div className="menuLeft">
        <MenuLeft />
      </div>      */}
 
      {/* <main className="mainUserPage">
        <div className="saldoAtual">
          <label>Saldo Atual</label> 
          <label>6.000,00</label> 
        </div>

        <div className="gastosCartao">
          <label>Gastos Cartão</label> 
          <label>2.320,00</label> 
        </div>      
      </main> */}
   </div> 
  );
}

export default UserPage;