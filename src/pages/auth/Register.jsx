import React from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';
import { registerUser } from '../../actions/auth';

// Styles
import authStyles from '../../styles/auth.module.css';

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
    <div className={authStyles.auth__ontainer}>
      <h2 className={authStyles.auth__heading}>Sign Up</h2>
      <form onSubmit={(e) => onRegister(e)} className={authStyles.auth__form}>
        <input
          id='email'
          type='email'
          placeholder='Email'
          onChange={(e) => onChange(e)}
          className={authStyles.input__email}
          required
        />
        <br />
        <input
          id='password'
          type='password'
          placeholder='Password'
          onChange={(e) => onChange(e)}
          className={authStyles.input__password}
          required
        />
        <br />
        <button type='submit' className={authStyles.btn__auth}>
          Sign Up
        </button>
      </form>
      <p className={authStyles.auth__help__text}>
        If you already have an account, <br /> Let's sign in{' '}
        <Link to='/sign-in' className={authStyles.auth__help__text__link}>
          here
        </Link>
      </p>
    </div>
  );
};

export default Register;
