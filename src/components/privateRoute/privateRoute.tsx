import React, { ReactPropTypes } from 'react'

import { Route, Redirect, RouteProps} from 'react-router-dom'

const PrivateRoute = (props: RouteProps) => {
  const isLogged = !!localStorage.getItem('token')
  return isLogged ? <Route {...props} /> : <Redirect to="/" />
}

export default PrivateRoute;