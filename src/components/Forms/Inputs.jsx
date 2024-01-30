import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
export const Inputs = ({
  register,
  name,
  placeholder = 'Enter the text',
  label,
  errors,
  type = 'text',
}) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text text-[20px] text-primary">{label}</span>
      </label>
      <div className="relative">
        <input
          {...register(name)}
          type={showPass ? 'text' : type}
          placeholder={placeholder}
          className="input input-bordered input-primary  w-full"
        />

        {type === 'password' && (
          <>
            <button type="button" onClick={() => setShowPass(prev => !prev)}>
              {showPass ? (
                <FaEye className="absolute right-4 top-4" />
              ) : (
                <FaEyeSlash className="absolute right-4 top-4" />
              )}
            </button>
            <p className="px-2 pt-1 text-red-500">{errors.password?.message}</p>
          </>
        )}
        {type === 'text' && (
          <p className="px-2 pt-1 text-red-500">{errors.name?.message}</p>
        )}
        {type === 'email' && (
          <p className="px-2 pt-1 text-red-500">{errors.email?.message}</p>
        )}
      </div>
    </div>
  );
};
