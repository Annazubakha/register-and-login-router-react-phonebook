import { useDispatch } from 'react-redux';
import { deleteontactThunk } from '../../redux/operations';

export const ContactListElem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li key={id}>
      {name}: {number}
      <button type="button" onClick={() => dispatch(deleteontactThunk(id))}>
        Delete
      </button>
    </li>
  );
};
