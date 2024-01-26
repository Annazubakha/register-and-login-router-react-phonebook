import React, { useEffect } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList ';
import { ContactsFilter } from 'components/Filter/Filter';
import s from './App.module.css';
import { useDispatch } from 'react-redux';
import { fetchContactsThunk } from '../../redux/operations';
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <>
      <header className="px-16 py-8 bg-[#ad3e02]">hello</header>
      <div className="bg-[#aaaaaa] px-16 py-8">
        {/* <h1 className="text-center mx-auto">Phonebook</h1> */}
        <ContactForm />
        <h2 className={s.title}>Contacts</h2>
        <ContactsFilter />
        <ContactList />
      </div>
    </>
  );
};
