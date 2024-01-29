import React from 'react';
import { IoLogOutOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUser } from '../../redux/selectors';
import { logoutThunk } from '../../redux/operations';

const UserMenu = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <ul className="flex gap-5 items-center">
      <li>
        <NavLink to="/contacts" className="text-[20px] ">
          {email}
        </NavLink>
      </li>
      <li className=" flex items-center">
        <NavLink to="/" className="text-center">
          <IoLogOutOutline size={28} onClick={() => dispatch(logoutThunk())} />
        </NavLink>
      </li>
    </ul>
  );
};

export default UserMenu;
