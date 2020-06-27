import React, { Component } from 'react';
import {Route, BrowserRouter, Switch, Redirect, Router} from 'react-router-dom';
import Home from './components/home'
import Login from './components/login'
import UserRegister from './components/userRegister'
import UserPage from './components/userPage'
import ComponentTest from './components/componentTest'
import { isAuthenticated } from './auth/auth'
import PrivateRoute from '../src/components/privateRoute/privateRoute'
import {history} from '../src/components/history/history';


// const PrivateRoute = ( { component: Component, ...rest } : any & {Component:any} ) => (
//   <Route  
//     {...rest} render={props =>
//       isAuthenticated() ?(
//         <Component {...props} />
//       ) : (
//         <Redirect to={{pathname: "/", state: {from: props.location}}} />
//       )
//     }
//   />
// );

const Routes = () =>{
  return(
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact /> 
        <Route component={Login} path="/login" />  
        <Route component={UserRegister} path="/register" />  
        <Route component={() => (<h1> Autenticado </h1> )} path="/autentidaco" />  
        <Route component={() => (<h1> Falha na Autenticação </h1> )} path="/falha" />  
        <PrivateRoute component={() => <h1>Autenticado</h1>}  path="/app"/>  
        <PrivateRoute component={UserPage}  path="/userpage"/>  
        <Route component={ComponentTest} path="/test" />  
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;


