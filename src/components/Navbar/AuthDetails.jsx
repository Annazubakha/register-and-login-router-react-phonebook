import React from 'react';
import { Link } from 'react-router-dom';

export const AuthDetails = () => {
  return (
    <div className="flex-none">
      <ul className="flex gap-4 items-center">
        <li>
          <Link to="/contacts" className="text-[24px]">
            Contacts
          </Link>
        </li>
        <li>
          <Link to="/register" className="text-[20px]">
            SignUp
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-[20px]">
            LogIn
          </Link>
        </li>
      </ul>
    </div>
  );
};
