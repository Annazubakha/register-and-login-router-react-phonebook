import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../redux/operations';

export const ContactListElem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li key={id} className=" text-primary  font-semibold">
      <div className="flex  gap-3  items-center justify-between w-[600px]">
        {name}: {number}
        <button
          className="btn  btn-sm btn-outline btn-primary w-[80px] text-[16px]"
          type="button"
          onClick={() => dispatch(deleteContactThunk(id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
