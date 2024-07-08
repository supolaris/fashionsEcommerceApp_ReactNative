import React from 'react';

import {AppContextProvider} from './src/utilities/AppContext';

import StackNav from './src/routes/StackNav';
const App = () => {
  return (
    <AppContextProvider>
      <StackNav />
    </AppContextProvider>
  );
};

export default App;
