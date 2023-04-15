import { useContext } from 'react';
import NavigationContext from '../context/navigation.jsx';

function useNavigation() {
  return useContext(NavigationContext);
}

export default useNavigation;
