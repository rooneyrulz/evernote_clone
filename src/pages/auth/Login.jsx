import React from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';
import { loginUser } from '../../actions/auth';
import './Auth.css';

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
      <h2 className='auth__heading'>Sign In</h2>
      <form className='auth__form' onSubmit={(e) => onLogin(e)}>
        <input
          id='email'
          className='input__email'
          type='email'
          placeholder='Email'
          onChange={(e) => onChange(e)}
          required
        />
        <br />
        <input
          id='password'
          className='input__password'
          type='password'
          placeholder='Password'
          onChange={(e) => onChange(e)}
          required
        />
        <br />
        <button className='btn__auth' type='submit'>
          Sign In
        </button>
      </form>
      <p className='auth__help__text'>
        If you did not already have an account, <br /> Let's create one{' '}
        <Link to='/sign-up'>here</Link>
      </p>
    </div>
  );
};

export default Login;
