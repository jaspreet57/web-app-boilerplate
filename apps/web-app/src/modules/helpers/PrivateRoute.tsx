import React, { useEffect } from 'react';
import { Redirect, Route, useLocation, RouteProps } from 'react-router-dom';
import qs from 'query-string';

export interface PrivateRouteProps extends RouteProps {
  authenticated: boolean;
  component: React.FunctionComponent;
}

const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({
  authenticated,
  component: Component,
  ...rest
}) => {
  const location = useLocation();

  // below is simple way to redirect to url which was requested before login
  useEffect(() => {
    const { requestedUrl } = qs.parse(location.search);
    const redirectURL = localStorage.getItem('redirectURL');
    if (!redirectURL && requestedUrl) {
      localStorage.setItem('redirectURL', requestedUrl);
    }
  }, [location]);

  const renderRoute = (props) => {
    if (!authenticated) {
      return <Redirect to="/login" />;
    }

    const redirectURL = localStorage.getItem('redirectURL');

    if (redirectURL) {
      localStorage.removeItem('redirectURL');
      return <Redirect to={redirectURL} />;
    }

    return <Component {...props} />;
  };

  return <Route {...rest} render={renderRoute} />;
};

export { PrivateRoute };
