import React from 'react';
import { IoLogOutOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { selectIsLoggedIn, selectUser } from '../../redux/selectors';
import { logoutThunk } from '../../redux/operations';

const UserMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <>
      <ul className="flex gap-5 items-center">
        <li>
          <Link to="/contacts" className="text-[24px]">
            Contacts
          </Link>
        </li>
        <li>
          <NavLink to="/contacts" className="text-[20px] ">
            {email}
          </NavLink>
        </li>
        <li className=" flex items-center">
          <NavLink to="/" className="text-center">
            {isLoggedIn && (
              <IoLogOutOutline
                size={28}
                onClick={() => dispatch(logoutThunk())}
              />
            )}
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default UserMenu;
