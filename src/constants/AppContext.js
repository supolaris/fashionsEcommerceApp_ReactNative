import {createContext, useState} from 'react';

export const AppContext = createContext({
  themeModeHandler: () => {},
  cartProductsArray: [],
});

export const AppContextProvider = ({children}) => {
  const [lightDarkTheme, setLightDarkTheme] = useState('Light');

  const themeModeHandler = themeMode => {
    setLightDarkTheme(themeMode);
    return lightDarkTheme;
  };

  const valuesLinking = {
    themeModeHandler: themeModeHandler,
  };

  return (
    <AppContextProvider.Provider value={valuesLinking}>
      {children}
    </AppContextProvider.Provider>
  );
};
