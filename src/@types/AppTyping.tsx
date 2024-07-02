export interface InterfaceProductTyping {
  id: number;
  NoOfProducts: number;
  CategoryName: string;
  ProductName: string;
  ProductDescription: string;
  ProductPrice: number;
  ProductImage: string;
}

//home screen
export interface InterfaceProductCatagories {
  id: number;
  CatagoryName: string;
}

export interface InterfacePaymentMethodsData {
  id: number;
  PaymentTypeName: string;
  PaymentTypeImage: string;
}
