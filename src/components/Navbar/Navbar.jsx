import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/selectors';
import { AuthDetails } from './AuthDetails';
import UserMenu from 'components/Usermenu/UserMenu';

export const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className="navbar  px-16 py-4 bg-[#D1D1D1] font-['Oswald'] font-bold    italic text-primary  ">
      <div className="flex-1">
        <NavLink to="/" className=" text-[32px] ">
          Home
        </NavLink>
      </div>
      <div>{isLoggedIn ? <UserMenu /> : <AuthDetails />}</div>
    </div>
  );
};
