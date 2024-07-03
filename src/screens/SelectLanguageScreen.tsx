import React, {useState} from 'react';

import SelectLanguage from '../components/screenUi/SelectLanguage';

import {useAppNavigation} from '../@types/AppNavigation';

const SelectLanguageScreen = () => {
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
      selectedLanguage={selectedLanguage}
      onLanguagePressed={onLanguagePressed}
      onHeaderBackArrowPressed={onHeaderBackArrowPressed}
      languageValue={languageValue}
      onLangaugeOnChangeText={onLangaugeOnChangeText}
    />
  );
};

export default SelectLanguageScreen;
