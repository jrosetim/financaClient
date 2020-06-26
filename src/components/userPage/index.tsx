import React, {BaseSyntheticEvent} from 'react';
import {useHistory} from 'react-router-dom'
import MenuTop from '../menuTop'


const UserPage: React.FC = () =>{
  const history = useHistory();

  // const handleClick = () =>{
  //   history.push('/');
  // }

  return (
    <MenuTop />
  );
}

export default UserPage;