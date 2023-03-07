import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

const secureRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem('token');

    return (
        <Route
          {...rest}
          render={(props) =>
            isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      );
}

export default secureRoute;