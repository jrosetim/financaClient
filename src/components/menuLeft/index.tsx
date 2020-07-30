import React, {useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {FiUser, FiDollarSign, FiLogOut, FiMenu} from 'react-icons/fi';
import {Dropdown} from 'react-bootstrap'
import AuthContext from '../context/authContext';


import './styles.css';

const MenuLeft : React.FC = () => {
  const history = useHistory();
  const {logged} = useContext(AuthContext);

  useEffect(() => {
    console.log('MenuLeft ' + logged);
  }, [])

  const toGroupExpense = () =>{
     history.push('/groupexpense') ;
  }

  const toUserUpdateData = () =>{
    history.push('/userupdatedata') ;
 }


  return (
    <div>
      <ul className="ulMenu">
        <li className="liMenuItem"> <FiMenu />
          <ul className="itensMenu">        
            <li> 
              
              <button className="btnMenuLeft" onClick={toUserUpdateData}> <FiDollarSign size={30} />Atualização cadastral</button>
            </li>
            <li> 
              <button className="btnMenuLeft" ><FiDollarSign size={30}/> Lançamentos</button>
            </li>
            <li> 
              
              <button className="btnMenuLeft" ><FiDollarSign size={30}/>  Sei la</button>
            </li>
            <li> 
              <button className="btnMenuLeft" onClick={toGroupExpense}> <FiDollarSign size={30} />  Grupo de Lançamento </button>
              {/* <a href="/groupexpense"> Grupo de Lançamento </a> */}
            </li>
            <li> 
              
              <button className="btnMenuLeft" > <FiLogOut size={30}/> Sair</button>              
            </li>
          </ul>
        </li>  
      </ul>

    </div>
  );
}

export default MenuLeft;