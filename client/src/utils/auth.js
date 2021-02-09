import React from 'react';
import decode from 'jwt-decode';
import { Redirect } from 'react-router-dom';

const getToken = () => localStorage.getItem('token');
const setToken = token => localStorage.setItem('token', token);
const clearToken = () => localStorage.removeItem('token');

const decodeToken = key => {
  try {
    return decode(key);
  } catch (e) {
    return null;
  }
};

const useAuth = () => decodeToken(getToken());

const logout = () => {
  window.location.reload();
  clearToken();
};

const Logout = ({ redirect }) => {
  const token = getToken();

  if (token) {
    logout();
  }

  return <Redirect to={redirect} />;
};

const RedirectUnauthorized = ({ to }) => {
  const user = useAuth();
  console.log({ user });

  if (user) {
    return null;
  }

  return <Redirect to={to} />;
};

export {
  logout,
  useAuth,
  getToken,
  setToken,
  decodeToken,
  Logout,
  RedirectUnauthorized,
};
