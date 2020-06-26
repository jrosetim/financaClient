import React, {BaseSyntheticEvent} from 'react';
import {useHistory} from 'react-router-dom'

import './styles.css'
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import {history} from '../history/history'

const MenuTop: React.FC = () =>{
  // const history = useHistory();
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event: BaseSyntheticEvent) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  //   localStorage.setItem('token', '');
  //   history.push('/');
  // };

  return (
    <nav>
      <ul>
        <li className="ulMenuTop">
            <li>Menu
                <ul>
                  <li>Perfil</li>
                  <li>Minha conta</li>
                  <li>Sair</li>                    
                </ul>
            </li>
        </li>
      </ul>
    </nav>    
    // <div>
    //   <Button 
    //     aria-controls="simple-menu" 
    //     aria-haspopup="true" 
    //     onClick={handleClick}
    //     color="primary"
    //     className="btnMenuTop"
    //   >
          
    //     Open Menu
    //   </Button>
    //   <Menu
    //     id="simple-menu"
    //     anchorEl={anchorEl}
    //     keepMounted
    //     open={Boolean(anchorEl)}
    //     onClose={handleClose}
    //   >
    //     <MenuItem onClick={handleClose}>Perfil</MenuItem>
    //     <MenuItem onClick={handleClose}>Minha conta</MenuItem>
    //     <MenuItem onClick={handleClose}>Sair</MenuItem>
    //   </Menu>
    // </div>
  );
}

export default MenuTop;