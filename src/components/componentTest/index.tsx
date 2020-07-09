import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import './styles.css';


const ComponentTest : React.FC = () => {
  const history = useHistory();
  const [nextPage, setNextPage] = useState<boolean>(false);

  function handleClick() {
    setNextPage(true);

    if (nextPage){
       history.push('/');
    }
  }

  return (
    <div className="testContainer">
      <div className="testHeader">
        <h1 className="testH1">Registro</h1>
        <p> Preencha os campos para fazer o seu cadastro.</p>
      </div>

      <div className="testMain">
        <label className="labelCpfRg">CPF</label>
        <label className="labelCpfRg">RG</label>
        <input className="inputCpfRg" placeholder="Cpf" type="text" />

        
        <input className="inputCpfRg" placeholder="Rg" type="text" />

        <label>CEP</label>
        <input placeholder="Cep" type="text" />

        <label>Rua</label>
        <input placeholder="Rua" type="text" />

        <label>Número</label>
        <input placeholder="Número" type="text" />

        <label>Cidade</label>
        <input placeholder="Cidade" type="text" />

        <label>UF</label>
        <input placeholder="UF" type="text" />


      </div>

      <div className="testFooter"></div>

    </div>
  )
}

export default ComponentTest;
