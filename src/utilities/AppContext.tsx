import {createContext, useState} from 'react';

export const AppContext = createContext({
  themeModeHandler: () => {},
  isDarkMode: false,
});

export const AppContextProvider = ({children}: {children: any}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeModeHandlerFunction = (themeMode: boolean) => {
    setIsDarkMode(themeMode);
    //return lightDarkTheme;
  };

  const valuesLinking = {
    themeModeHandler: themeModeHandlerFunction,
    isDarkMode: isDarkMode,
  };

  return (
    <AppContext.Provider value={valuesLinking}>{children}</AppContext.Provider>
  );
};
