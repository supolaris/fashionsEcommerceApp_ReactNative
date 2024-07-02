export interface InterfaceProductTyping {
  id: number;
  NoOfProducts: number;
  CategoryName: string;
  ProductName: string;
  ProductDescription: string;
  ProductPrice: string;
  ProductImage: string;
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
  CatagoryPicture: string;
  NoOfProducts: number;
}

export interface InterfacePaymentMethodsData {
  id: number;
  PaymentTypeName: string;
  PaymentTypeImage: string;
}

export interface InterfaceProductSortByData {
  id: number;
  SortName: string;
}

export interface InterfaceSelectCountryData {
  id: number;
  CountryName: string;
  CountryFlag: string;
}

export interface InterfaceSelectLanguageData {
  id: number;
  LanguageName: string;
  LanguageImage: string;
}

export interface InterfaceProductSizeData {
  id: number;
  SizeName: string;
}
