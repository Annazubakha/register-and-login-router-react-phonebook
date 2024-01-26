import { filterContacts } from '../../redux/filterSlice';
import { useDispatch } from 'react-redux';
import { FaFilter } from 'react-icons/fa6';
export const ContactsFilter = () => {
  const dispatch = useDispatch();
  return (
    <label className="flex gap-4  items-center text-[24px] text-primary">
      <FaFilter />
      <input
        type="text"
        placeholder="Type here the name of the contact to find it"
        className="input input-bordered input-primary w-[442px]"
        name="filter"
        onChange={event => dispatch(filterContacts(event.target.value))}
      />
    </label>
  );
};
