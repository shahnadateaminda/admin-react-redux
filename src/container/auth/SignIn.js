import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(4, 'minimum 4 digits required')
    .required('Password is required'),
});



export default function SignIn(props) {


  const { actions, userdata, history } = props
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const timer = React.useRef();


  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      if (!loading) {
        setSuccess(false);
        setLoading(true);
        timer.current = window.setTimeout(() => {
          setSuccess(true);
          setLoading(false);
          actions.UserLogin(values);
          history.push('/dashboard')
        }, 2000);
      }
    },
  });

  return (
    <>
      <div >

        <form onSubmit={formik.handleSubmit} noValidate>
          <p>
            Sign in to your Account
          </p>
          <input
            required
            id="email"
            onChange={formik.handleChange}
            name="email"
            value={formik.values.email}



          />
          <input


            onChange={formik.handleChange}
            name="password"

            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password}

          />
          <div >
            <button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth

              disabled={loading}
            >
              Sign In
            </button>
          </div>


        </form>
      </div>

    </>

  );
}
