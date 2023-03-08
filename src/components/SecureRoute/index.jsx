import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const SecureRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route {...rest} element={isAuthenticated ? <Component /> : <Navigate to='/login' />} />
  );
}

export default SecureRoute;