import { ContactListElem } from 'components/ContactListElem/ContactListElem';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';

export const ContactList = () => {
  const items = useSelector(selectFilteredContacts);
  return (
    <>
      <ul className={s.list}>
        {items.map(contact => (
          <ContactListElem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        ))}
      </ul>
    </>
  );
};
