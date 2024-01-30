import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../components/schemas/registerSchema';

import { registerThunk } from '../../redux/operations';
import { Inputs } from 'components/Forms/Inputs';

const Register = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const submit = data => {
    dispatch(registerThunk(data))
      .unwrap()
      .then(toast.success('User was registered successful!'))
      .catch(error => toast.warning('User was registreted. Please, log in.'));
    reset();
  };
  return (
    <div className="hero h-[calc(100vh_-_80px)] bg-base-200 ">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-primary italic ">
        <form
          className="card-body  font-['Oswald'] p-[16px]"
          onSubmit={handleSubmit(submit)}
        >
          <Inputs
            register={register}
            name="name"
            type="text"
            placeholder="Type here your name"
            errors={errors}
            label="Name"
          />
          <Inputs
            register={register}
            name="email"
            type="email"
            placeholder="Type here your email"
            errors={errors}
            label="Email"
          />
          <Inputs
            register={register}
            name="password"
            type="password"
            placeholder="Type here your password"
            errors={errors}
            label="Password"
          />

          <div className="form-control mt-6">
            <button className="btn btn-primary  text-[18px] ">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
