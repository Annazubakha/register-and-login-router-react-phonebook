import { ContactListElem } from 'components/ContactListElem/ContactListElem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';

export const ContactList = () => {
  const items = useSelector(selectFilteredContacts);
  return (
    <>
      <ol className="flex flex-col gap-2 text-[28px] font-[500] list-decimal pl-[32px] text-primary]">
        {items.map(contact => (
          <ContactListElem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        ))}
      </ol>
    </>
  );
};
