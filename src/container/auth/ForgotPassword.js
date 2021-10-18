import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),

});



export default function ForgotPassword(props) {


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
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      if (!loading) {
        setSuccess(false);
        setLoading(true);
        timer.current = window.setTimeout(() => {
          setSuccess(true);
          setLoading(false);
          // actions.UserLogin(values);
          history.push('/dashboard')
        }, 2000);
      }
    },
  });

  return (
    <>
      <div>

        <form onSubmit={formik.handleSubmit} noValidate>
          <p >
            Reset Your Password
          </p>
          <input
            onChange={formik.handleChange}
            name="email"
            value={formik.values.email}
          />

          <div >
            <button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Send Reset Link
            </button>
          </div>


        </form>
      </div>

    </>

  );
}
