import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './components/home'
import Login from './components/login'
import UserRegister from './components/userRegister'
import UserPage from './components/userPage'
import UserUpdateData from './components/userUpdateData'
import ComponentTest from './components/componentTest'
import PrivateRoute from '../src/components/privateRoute/privateRoute'
import GroupExpense from './components/gropexpense';

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
        <Route component={Login} path="/login"  exact/>  
        <Route component={UserRegister} path="/register"  exact/>  
        
        <PrivateRoute component={() => <h1>Autenticado</h1>}  path="/app" exact/>  
        <PrivateRoute component={UserPage}  path="/userpage" exact/>  
        <PrivateRoute component={UserUpdateData}  path="/userupdatedata" exact/>  
        <PrivateRoute component={GroupExpense} path="/groupexpense" exact/>

        <Route component={ComponentTest} path="/test" exact/>  
        <Route component={() => (<h1> Autenticado </h1> )} path="/autentidaco" exact/>  
        <Route component={() => (<h1> Falha na Autenticão </h1> )} path="/falha" exact/>  
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;


