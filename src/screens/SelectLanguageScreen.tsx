import React, {useState, useContext} from 'react';

import SelectLanguage from '../components/screenUi/SelectLanguage';

import {useAppNavigation} from '../@types/AppNavigation';

import {AppContext} from '../utilities/AppContext';

const SelectLanguageScreen = () => {
  const AppCtx = useContext(AppContext);
  const isDarkMode = AppCtx.isDarkMode;

  const navigaiton = useAppNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [languageValue, setLanguageValue] = useState<string>('');

  const onLanguagePressed = (item: any) => {
    setSelectedLanguage(item.LanguageName);
  };

  const onHeaderBackArrowPressed = () => {
    navigaiton.goBack();
  };

  const onLangaugeOnChangeText = (val: string) => {
    setLanguageValue(val);
  };

  return (
    <SelectLanguage
      isDarkModeActive={isDarkMode}
      selectedLanguage={selectedLanguage}
      onLanguagePressed={onLanguagePressed}
      onHeaderBackArrowPressed={onHeaderBackArrowPressed}
      languageValue={languageValue}
      onLangaugeOnChangeText={onLangaugeOnChangeText}
    />
  );
};

export default SelectLanguageScreen;
