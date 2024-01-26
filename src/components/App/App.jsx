import Contacts from 'pages/Contacts/Contacts';
import Home from 'pages/Home/Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="register" element={<Contacts />} />
          <Route path="login" element={<Contacts />}>
            <Route path="contacts" element={<Contacts />} />
          </Route>
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
