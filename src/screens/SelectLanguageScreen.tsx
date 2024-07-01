import React, {useState} from 'react';

import SelectLanguage from '../components/screenUi/SelectLanguage';

import {useAppNavigation} from '../@types/AppNavigation';

const SelectLanguageScreen = () => {
  const navigaiton = useAppNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState();

  const onLanguagePressed = (item: any) => {
    setSelectedLanguage(item.LanguageName);
  };

  const onHeaderBackArrowPressed = () => {
    navigaiton.goBack();
  };

  return (
    <SelectLanguage
      selectedLanguage={selectedLanguage}
      onLanguagePressed={onLanguagePressed}
      onHeaderBackArrowPressed={onHeaderBackArrowPressed}
    />
  );
};

export default SelectLanguageScreen;
