import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'components/Navbar/Navbar';
import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
