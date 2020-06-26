import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import './styles.css';

const Home: React.FC = () => {
  useEffect(() => {
    localStorage.setItem('successs', '');
  }, []);

  return( 
    <header className="header">
      <div className="brand-box">
        <Link to="/login">
          <button className="button">Entrar</button>
          {/* <span className="brand">Entrar</span> */}
        </Link>

        <Link to="/register">
          <button className="button">Cadastrar</button>
        </Link>
      </div>
      
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Seja bem vindo ao FinanCah</span>
          <span className="heading-primary-sub">Aqui seus sonhos podem se tornar realidade</span>
        </h1>
        <Link to="/login">
          <a href="#" className="btnSobre btnSobre-white btnSobre-animated">Sobre nós</a>
        </Link> 
      </div>
    </header>
  )
}

export default Home

