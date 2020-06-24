import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './components/home'
import Login from './components/login'


const Routes = () =>{
  return(
    <BrowserRouter>
      <Route component={Home} path="/" exact /> 
      <Route component={Login} path="/login" />    
    </BrowserRouter>
  );
};

export default Routes;


