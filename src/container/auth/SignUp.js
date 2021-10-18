import React from 'react';

export default function SignUp(props) {
  const { history } = props;

  return (
    <>
      <div >
        <p >
          Sign up
        </p>
        <form  noValidate>

          <input

            name="firstName"

            required

            id="firstName"
            label="First Name"

          />


          <input


            required

            id="lastName"

            name="lastName"

          />



          <button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
         
          >Sign Up
          </button>

        </form>
      </div>

    </>
  )
}