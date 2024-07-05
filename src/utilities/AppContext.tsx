import {createContext, useState} from 'react';

export const AppContext = createContext({
  themeModeHandler: () => {},
  cartProductsArray: [],
});

export const AppContextProvider = ({children}: {children: any}) => {
  const [lightDarkTheme, setLightDarkTheme] = useState('Light');

  const themeModeHandler = (themeMode: any) => {
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
