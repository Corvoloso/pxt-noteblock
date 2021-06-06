import React from 'react';

import AppProvider from './hooks';
import {useAuth} from './hooks/auth';

import Routes from './routes';

const App: React.FC = () => {
  const {user} = useAuth();

  console.log(user);

  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;
