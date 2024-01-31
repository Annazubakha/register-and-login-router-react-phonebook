import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/operations';
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = data => {
    dispatch(loginThunk(data));
    reset();
  };
  return (
    <div className="hero h-[calc(100vh_-_88px)]  bg-base-300 text-primary ">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 italic">
        <form
          className="card-body font-['Oswald']"
          onSubmit={handleSubmit(submit)}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[20px] text-primary">Email</span>
            </label>
            <input
              {...register('email')}
              type="email"
              placeholder="Type here your email"
              className="input input-bordered input-primary"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[20px] text-primary">
                Password
              </span>
            </label>
            <input
              {...register('password')}
              type="password"
              placeholder=" Type here your password"
              className="input input-bordered input-primary"
              required
            />
          </div>
          <div className="text-[18px]">
            Don't have an account?
            <Link to="/register" className="underline underline-offset-1">
              {' '}
              Sign up
            </Link>
          </div>
          <div className="form-control mt-6">
            <button to="/contacts" className="btn btn-primary  text-[18px] ">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
