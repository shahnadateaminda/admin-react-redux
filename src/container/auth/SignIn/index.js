import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import classes from './Signin.module.scss';

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
    <div className={classes.signIn}>
      <Row>
        <Col xs={8} className={'overflow-hidden'}>
          <img src="https://images.unsplash.com/photo-1533022139390-e31c488d69e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80" />
        </Col>
        <Col xs={4} >
          <Container className={classes.container}>
            <Form onSubmit={formik.handleSubmit} >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" onChange={formik.handleChange} placeholder="Enter email" />
               <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> 
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" onChange={formik.handleChange} placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>
    </div>
  );
}
