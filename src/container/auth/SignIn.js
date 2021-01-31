import React from 'react';
import {
  makeStyles, 
  TextField,
  CircularProgress,
  Link,
  Grid,
  Typography,
  Avatar,
  Button,
  Divider,
  Box
} from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    width: theme.spacing(40),
    [theme.breakpoints.down('sm')]: {
      width: 'auto'
    },
  },
  avatar: {
    margin: theme.spacing(1),
    width: 140,
    height: 25,
    marginLeft: -13,
    marginBottom: -8,
    '& .MuiAvatar-img': {
      objectFit: 'contain'
    }
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    "& .MuiTextField-root": {
      "& .MuiFormHelperText-root": {
        position: 'absolute',
        bottom: -20
      }
    }
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
  textfield: {
    margin: '10px auto',
 
  },
  wrapper: {
    margin: '14px auto',
    position: 'relative',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

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

function Copyright() {
  return (
    <>
      <Divider />
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
      </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </>
  );
}

export default function SignIn(props) {
  
  const classes = useStyles();
  const { actions, userdata ,history} = props
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
      <div className={classes.paper}>
          <Avatar
            variant="square"
            alt="logo"
            src="https://www.zappfresh.com/images/self/zappfresh-logo.png"
            className={classes.avatar}
          />
          <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
            <Typography component="h1" variant="h6">
              Sign in to your Account
          </Typography>
            <TextField
              variant="outlined"
            
              required
              fullWidth
              id="email"
              onChange={formik.handleChange}
            label="Email Address"
            margin="dense"
              className={classes.textfield}
              name="email"
              autoComplete="email"
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="dense"
              required
              fullWidth
              onChange={formik.handleChange}
              name="password"
              className={classes.textfield}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <div className={classes.wrapper}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                className={classes.submit}
                disabled={loading}
              >
                Sign In
               </Button>
              {loading && <CircularProgress size={24} color="primary" className={classes.buttonProgress} />}
            </div>

            <Grid container>
              <Grid item xs>
              <Link
                style={{cursor:'pointer'}}
                onClick={() => history.push('/auth/forgotPassword')}
                variant="body2">
                Forgot password?
                </Link>
              </Grid>
              <Grid item>
              <Link
                onClick={() => history.push('/auth/signin')}
                style={{cursor:'pointer'}}
                variant="body2">
                  Create New Account.
                </Link>
              </Grid>
            </Grid>
          </form>
    </div>
     <Box mt={5}>
          <Copyright />
      </Box>
    </>

  );
}
