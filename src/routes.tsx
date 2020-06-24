import React, { Component } from 'react';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';
import Home from './components/home'
import Login from './components/login'
import UserRegister from './components/userRegister'
import { isAuthenticated } from './auth/auth'

const PrivateReoute = ( { component: Component, ...rest } : any & {Component:any} ) => (
  <Route  
    {...rest} render={props =>
      isAuthenticated() ?(
        <Component {...props} />
      ) : (
        <Redirect to={{pathname: "/", state: {from: props.location}}} />
      )
    }
  />
);

const Routes = () =>{
  return(
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact /> 
        <Route component={Login} path="/login" />  
        <Route component={UserRegister} path="/register" />  
        <PrivateReoute component={() => <h1>Autenticado</h1>}  path="/app"/>  
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;


