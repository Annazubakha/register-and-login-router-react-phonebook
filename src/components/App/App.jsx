import React, { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

// import  Layout  from 'components/Layout/Layout';
// import Contacts from 'pages/Contacts/Contacts';
// import Home from 'pages/Home/Home';
// import Login from 'pages/Login/Login';
// import Register from 'pages/Register/Register';

import { PrivateRoute } from 'routers/PrivateRoute';
import { PublicRoute } from 'routers/PublicRoute';
import { refreshUserThunk } from '../../redux/operations';
import { selectIsRefreshing } from '../../redux/selectors';
import { Loader } from 'components/Loader/Loader';
import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
// const Layout = lazy(() => import('components/Layout/Layout'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  console.log(isRefreshing);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute component={<Contacts />} redirectTo="/login" />
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute component={<Register />} redirectTo="/contacts" />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute component={<Login />} redirectTo="/contacts" />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
