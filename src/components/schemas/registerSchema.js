import * as yup from 'yup';
const EMAIL_REGX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

export const schema = yup.object({
  name: yup
    .string()
    .required('This field is required')
    .min(3, 'Name should be more than 3 chars')
    .max(10, 'Name should be less than 10 chars'),
  email: yup
    .string()
    .required('This field is required')
    .matches(EMAIL_REGX, 'Invalid email address'),
  password: yup
    .string()
    .required('This field is required')
    .min(8, 'Min length of password is 8 chars'),
});
