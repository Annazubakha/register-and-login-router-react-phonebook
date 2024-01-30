import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList ';
import { ContactsFilter } from 'components/Filter/Filter';

import { fetchContactsThunk } from '../../redux/operations';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <div className="font-['Oswald'] italic font-normal h-[calc(100vh_-_80px)] bg-base-300 px-16 py-16 flex  gap-5 flex-col items-left">
      <ContactForm />
      <div className="divider divider-primary text-[28px] text-primary font-bold ">
        Contacts
      </div>
      <ContactsFilter />
      <div className="flex  gap-5 flex-col items-left justify-start">
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
