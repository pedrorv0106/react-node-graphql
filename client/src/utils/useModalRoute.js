import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const isModalRoute = (pathname, routes) =>
  routes.some(route => pathname.includes(route));

const useModalRoute = modalRoutes => {
  const location = useLocation();
  const history = useHistory();

  const isModal = isModalRoute(location.pathname, modalRoutes);
  const [prevLocation, setPrevLocation] = useState({
    hash: '',
    key: 'home',
    pathname: isModal ? '/' : location.pathname,
    search: isModal ? '' : location.search,
  });

  useEffect(() => {
    if (history.action !== 'POP' && !isModal) {
      setPrevLocation(location);
    }
  }, [location, history.action, isModal]);

  return {
    location: prevLocation,
  };
};

export default useModalRoute;
