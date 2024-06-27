import React, {useState} from 'react';

import SelectCountry from '../components/screenUi/SelectCountry';

const SelectCountryScreen = () => {
  const [selectedCountry, setSelectedCountry] = useState();

  const onCountryPressed = (item: any) => {
    setSelectedCountry(item.CountryName);
  };

  return (
    <SelectCountry
      onCountryPressed={onCountryPressed}
      selectedCountry={selectedCountry}
    />
  );
};

export default SelectCountryScreen;
