import React, {useContext, useEffect} from 'react';
import Modal from 'react-modal';
import {useHistory} from 'react-router-dom';
import AuthContext from '../context/authContext'

const GroupExpense : React.FC  = () => {
  const history = useHistory();
  const {logged, personData} = useContext(AuthContext);

  const handleClickBack = () => {
    history.goBack();
  }

  useEffect(() => {
    console.log('userUpdate ' + logged);
  }, [])  

  return(
    <Modal isOpen={true}>
      <h2>personData</h2>
      <p>Modal test</p>
      <button>Salvar</button>
      <button onClick={handleClickBack} >Sair</button>
    </Modal>
  )

}

export default GroupExpense;