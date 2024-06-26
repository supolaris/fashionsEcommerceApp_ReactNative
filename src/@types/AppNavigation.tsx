import {useNavigation, NavigationProp} from '@react-navigation/native';
import {StackParmList} from './ParamsList';

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<StackParmList>>();
};
