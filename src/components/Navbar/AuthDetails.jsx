import React from 'react';
import { Link } from 'react-router-dom';

export const AuthDetails = () => {
  return (
    <div className="flex-none">
      <ul className="flex gap-4">
        <li>
          <Link to="/register" className="text-[20px]">
            Register
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
