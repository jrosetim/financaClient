import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';


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
    <button onClick={handleClick} >click</button>
  )
}

export default ComponentTest;
