import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList ';
import { ContactsFilter } from 'components/Filter/Filter';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContactsThunk } from '../../redux/operations';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <>
      <header className="px-16 py-8 bg-[#7F7679]">Phonebook</header>
      <div className="font-['Oswald'] italic font-normal h-[calc(100vh_-_88px)] bg-[#E5E4E2] px-16 py-16 flex  gap-5 flex-col items-left">
        <ContactForm />
        <div className="divider divider-primary text-[28px] text-primary font-bold ">
          Contacts
        </div>
        <ContactsFilter />
        <div className="flex  gap-5 flex-col items-left justify-start">
          <ContactList />
        </div>
      </div>
    </>
  );
};

export default Contacts;
