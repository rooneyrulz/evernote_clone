import React from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';
import { loginUser } from '../../actions/auth';

// Styles
import { authStyles } from '../../styles/auth.module';

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
    <div className='login'>
      <h2 className='auth__heading' style={authStyles.authHeading}>
        Sign In
      </h2>
      <form
        className='auth__form'
        onSubmit={(e) => onLogin(e)}
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
          Sign In
        </button>
      </form>
      <p className='auth__help__text' style={authStyles.authHelpText}>
        If you did not already have an account, <br /> Let's create one{' '}
        <Link to='/sign-up' style={authStyles.authHelpTextLink}>
          here
        </Link>
      </p>
    </div>
  );
};

export default Login;
