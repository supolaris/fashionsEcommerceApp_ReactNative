import {ImageSourcePropType} from 'react-native';

export interface InterfaceProductTyping {
  id: number;
  NoOfProducts: number;
  CategoryName: string;
  ProductName: string;
  ProductDescription: string;
  ProductPrice: number;
  ProductImage: ImageSourcePropType;
}

//home screen
export interface InterfaceProductCatagories {
  id: number;
  CatagoryName: string;
}

export interface InterfaceProductCatagoriesData {
  id: number;
  CatagoryName: string;
  CatagoryApiName: string;
  CatagoryPicture: ImageSourcePropType;
  NoOfProducts: number;
}

export interface InterfacePaymentMethodsData {
  id: number;
  PaymentTypeName: string;
  PaymentTypeImage: ImageSourcePropType;
}

export interface InterfaceProductSortByData {
  id: number;
  SortName: string;
}

export interface InterfaceSelectCountryData {
  id: number;
  CountryName: string;
  CountryFlag: ImageSourcePropType;
}

export interface InterfaceSelectLanguageData {
  id: number;
  LanguageName: string;
  LanguageImage: ImageSourcePropType;
}

export interface InterfaceProductSizeData {
  id: number;
  SizeName: string;
}

export interface InterfaceRatingStarData {
  id: 1;
  ratingNumber: 5;
}
