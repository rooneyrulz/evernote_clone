import React from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';
import { loginUser } from '../../actions/auth';

// Styles
import authStyles from '../../styles/auth.module.css';

const Login = (props) => {
  const {
    authData: { isAuthenticated },
    dispatch,
  } = React.useContext(AuthContext);
  const [formData, setFormData] = React.useState({ email: '', password: '' });

  if (isAuthenticated) props.history.push('/');

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onLogin = async (e) => {
    e.preventDefault();
    loginUser(formData, dispatch, props.history);
  };

  return (
    <div className={authStyles.auth__container}>
      <h2 style={authStyles.auth__eading}>Sign In</h2>
      <form onSubmit={(e) => onLogin(e)} className={authStyles.auth__form}>
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
          Sign In
        </button>
      </form>
      <p className={authStyles.auth__help__text}>
        If you did not already have an account, <br /> Let's create one{' '}
        <Link to='/sign-up' className={authStyles.auth__help__text__link}>
          here
        </Link>
      </p>
    </div>
  );
};

export default Login;
