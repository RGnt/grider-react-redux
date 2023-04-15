import useNavigation from '../hooks/use-navigation.jsx';

function Route({ path, children }) {
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;
