import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import AuthContext from '../context/authContext'

import './styles.css';


const ComponentTest : React.FC = () => {
  // const {logged, personData} = useContext(AuthContext);

  return (
    <div className="testContainer">
      {/* <h1> {personData.name} </h1>       */}

    </div>
  )
}

export default ComponentTest;
