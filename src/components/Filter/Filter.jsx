import { filterContacts } from '../../redux/filterSlice';
import { useDispatch } from 'react-redux';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  return (
    <label className="flex gap-4  justify-between items-center text-[24px] text-primary">
      Find contacts by name:
      <input
        type="text"
        placeholder="Please enter the name of the contact to find it"
        className="input input-bordered input-primary w-[400px]"
        name="filter"
        onChange={event => dispatch(filterContacts(event.target.value))}
      />
    </label>
  );
};
