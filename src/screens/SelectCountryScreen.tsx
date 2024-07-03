import React, {useState} from 'react';

import SelectCountry from '../components/screenUi/SelectCountry';

const SelectCountryScreen = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [countrySearchValue, setCountrySearchValue] = useState('');

  const onCountryPressed = (item: any) => {
    setSelectedCountry(item.CountryName);
  };

  const countryOnChangeText = (val: string) => {
    setSelectedCountry(val);
  };

  return (
    <SelectCountry
      selectedCountry={selectedCountry}
      onCountryPressed={onCountryPressed}
      countrySearchValue={countrySearchValue}
      countryOnChangeText={countryOnChangeText}
    />
  );
};

export default SelectCountryScreen;
