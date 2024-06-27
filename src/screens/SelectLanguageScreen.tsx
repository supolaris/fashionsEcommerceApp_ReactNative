import React, {useState} from 'react';

import SelectLanguage from '../components/screenUi/SelectLanguage';

const SelectLanguageScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const onLanguagePressed = (item: any) => {
    setSelectedLanguage(item.LanguageName);
  };

  return (
    <SelectLanguage
      selectedLanguage={selectedLanguage}
      onLanguagePressed={onLanguagePressed}
    />
  );
};

export default SelectLanguageScreen;
