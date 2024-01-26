import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from '../../redux/operations';
import { toast } from 'react-toastify';
import { selectContacts } from '../../redux/selectors';
import { IoPerson } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(selectContacts);

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };
  const findOldContact = name => {
    const oldContact = items.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (oldContact) {
      return toast.error(`${name} is already in contacts.`);
    } else {
      return oldContact;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (findOldContact(name)) {
      return;
    }
    dispatch(addContactThunk({ name, number }));
    toast.success(`${name} was added to contacts successfully.`);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className="flex gap-4 pb-[24px]" onSubmit={handleSubmit}>
        <label className="flex gap-2 justify-between items-center text-[28px] text-primary">
          <IoPerson />
          <input
            type="text"
            pattern="^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)"
            title="Please enter name like this: Anna Zubakha"
            minLength="4"
            placeholder="Type here the full name"
            className="input input-bordered input-primary w-[250px]"
            name="name"
            id={nanoid()}
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className="flex gap-2 justify-between items-center text-[28px] text-primary">
          <FaPhone />
          <input
            className="input input-bordered input-primary w-[250px]"
            placeholder="Type here the phone number"
            title="Please enter number like this: 123-456-7890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            type="tel"
            name="number"
            required
            id={nanoid()}
            value={number}
            onChange={handleChange}
          />
        </label>
        <div className="text-center">
          <button
            className="btn btn-outline btn-primary w-[120px] text-[16px]"
            type="submit"
          >
            Add contact
          </button>
        </div>
      </form>
    </>
  );
};
