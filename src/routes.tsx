import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Login from './components/login'

const Routes = () =>{
  return(
    <BrowserRouter>
      <Route component={Login} path="/login" />    
    </BrowserRouter>
  );
};

export default Routes;


