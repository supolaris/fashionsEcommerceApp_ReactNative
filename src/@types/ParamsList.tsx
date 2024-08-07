import {ImageSourcePropType} from 'react-native';

export type StackParmList = {
  First_Screen: undefined;
  Second_Screen: undefined;
  Login_Screen: undefined;
  SignUp_Screen: undefined;
  RegisterSuccess_Screen: undefined;
  Startup_Screen: undefined;
  Startup_Screen2: undefined;
  Startup_Screen3: undefined;
  Home_Screen: undefined;
  ProductsFilter_Screen: undefined;
  Catagories_Screen: undefined;
  ProductDescripton_Screen: {
    item: {
      id: number;
      NoOfProducts: number;
      CategoryName: string;
      ProductName: string;
      ProductDescription: string;
      ProductPrice: number;
      ProductImage: string;
    };
  };
  Products_Screen: {
    item: {
      id: number;
      CatagoryName: string;
      CatagoryApiName: string;
      CatagoryPicture: ImageSourcePropType;
      NoOfProducts: number;
    };
  };
  ProfileScreen: undefined;
  Profile_Screen: undefined;
  PersonalDetail_Screen: undefined;
  SelectLanguage_Screen: undefined;
  CardDetail_Screen: undefined;
  ProductTracking_Screen: undefined;
  PaymentMethod_Screen: undefined;
  Review_Screen: undefined;
  BottomNav: undefined;
  CartScreen: undefined;
};
