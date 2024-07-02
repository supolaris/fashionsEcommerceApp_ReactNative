import React, {useState} from 'react';

import SelectCountry from '../components/screenUi/SelectCountry';

const SelectCountryScreen = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countrySearchValue, setCountrySearchValue] = useState('');

  const onCountryPressed = (item: any) => {
    setSelectedCountry(item.CountryName);
  };

  return (
    <SelectCountry
      selectedCountry={selectedCountry}
      onCountryPressed={onCountryPressed}
      countrySearchValue={countrySearchValue}
      countryOnChangeText={setCountrySearchValue}
    />
  );
};

export default SelectCountryScreen;
