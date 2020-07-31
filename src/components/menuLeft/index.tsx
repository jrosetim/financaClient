import React, {useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {FiPlus, FiDollarSign, FiLogOut, FiMenu} from 'react-icons/fi';
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

      <button className="buttonMenuLeft"><FiMenu size="30px"/>

        <ul className="ulMenuLeft" >
          <li className="liMenuLeft">
            <div className="itemMenuLeft">
              <label >Atualização cadastral</label>              
            </div>
          </li>         
        </ul>
      </button>
      {/* <ul className="ulMenu">
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
            </li>
            <li> 
              
              <button className="btnMenuLeft" > <FiLogOut size={30}/> Sair</button>              
            </li>
          </ul>
        </li>  
      </ul> */}

    </div>
  );
}

export default MenuLeft;