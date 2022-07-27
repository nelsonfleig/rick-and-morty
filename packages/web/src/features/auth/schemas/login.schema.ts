import * as Yup from 'yup';

export const loginSchema = Yup.object({
  usernameOrEmail: Yup.string().required('Username or email is a required field'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .max(50, "Password can't be over 50 characters long")
    .required('Password is a required field'),
});
