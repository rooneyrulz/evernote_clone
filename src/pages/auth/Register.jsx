import React from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';
import { registerUser } from '../../actions/auth';

// Styles
import { authStyles } from '../../styles/auth.module';

const Register = (props) => {
  const {
    authData: { isAuthenticated },
    dispatch,
  } = React.useContext(AuthContext);
  const [formData, setFormData] = React.useState({ email: '', password: '' });

  if (isAuthenticated) props.history.push('/');

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onRegister = async (e) => {
    e.preventDefault();
    registerUser(formData, dispatch, props.history);
  };

  return (
    <div className='register' style={authStyles.authContainer}>
      <h2 className='auth__heading' style={authStyles.authHeading}>
        Sign Up
      </h2>
      <form
        className='auth__form'
        onSubmit={(e) => onRegister(e)}
        style={authStyles.authForm}
      >
        <input
          id='email'
          className='input__email'
          type='email'
          placeholder='Email'
          onChange={(e) => onChange(e)}
          style={authStyles.inputEmail}
          required
        />
        <br />
        <input
          id='password'
          className='input__password'
          type='password'
          placeholder='Password'
          onChange={(e) => onChange(e)}
          style={authStyles.inputPassword}
          required
        />
        <br />
        <button className='btn__auth' type='submit' style={authStyles.btnAuth}>
          Sign Up
        </button>
      </form>
      <p className='auth__help__text' style={authStyles.authHelpText}>
        If you already have an account, <br /> Let's sign in{' '}
        <Link to='/sign-in' style={authStyles.authHelpTextLink}>
          here
        </Link>
      </p>
    </div>
  );
};

export default Register;
