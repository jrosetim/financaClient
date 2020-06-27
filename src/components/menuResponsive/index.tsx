import React from 'react'

import './styles.css'

const MenuResponsivo: React.FC = () =>{

  return (
    <div className="navbar">
      <a className="active" href="#">Home</a> 
      <a href="#">Search</a> 
      <a href="#">Contact</a> 
      <a href="#">Login</a>
    </div>

  )  

}

export default MenuResponsivo;