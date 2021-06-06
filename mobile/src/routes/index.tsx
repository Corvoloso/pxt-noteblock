import React from 'react';

import {useAuth} from '../hooks/auth';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';

const Routes: React.FC = () => {
  const {user} = useAuth();

  return Object.entries(user).length !== 0 ? <Home /> : <SignIn />;
};

export default Routes;
