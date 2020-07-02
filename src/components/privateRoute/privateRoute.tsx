import React, { useContext } from 'react'
import { Route, Redirect, RouteProps} from 'react-router-dom'
import AuthContext from '../context/authContext'

const PrivateRoute = (props: RouteProps) => {
  const {logged} = useContext(AuthContext);
  const isLogged = logged;
  return isLogged ? <Route {...props} /> : <Redirect to="/" />
}

export default PrivateRoute;