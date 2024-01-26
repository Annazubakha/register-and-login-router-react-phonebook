import React, { useEffect } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList ';
import { ContactsFilter } from 'components/Filter/Filter';
import { useDispatch } from 'react-redux';
import { fetchContactsThunk } from '../../redux/operations';
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <>
      <header className="px-16 py-8 bg-[#7F7679]">Phonebook</header>
      <div className="font-['Oswald'] italic font-normal h-[calc(100vh_-_88px)] bg-[#E5E4E2] px-16 py-16 flex  gap-5 flex-col items-center h">
        <ContactForm />
        <div className="divider divider-primary text-[28px] text-primary font-bold ">
          Contacts
        </div>
        <ContactsFilter />
        <ContactList />
      </div>
    </>
  );
};
