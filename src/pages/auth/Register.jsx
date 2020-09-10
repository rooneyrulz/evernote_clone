import React from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';
import './Auth.css';

const Register = (props) => {
  const { isAuthenticated, registerUser } = React.useContext(AuthContext);
  const [formData, setFormData] = React.useState({ email: '', password: '' });

  isAuthenticated && props.history.push('/');

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onRegister = async (e) => {
    e.preventDefault();
    registerUser(formData, props.history);
  };

  return (
    <div className='register'>
      <h2 className='auth__heading'>Sign Up</h2>
      <form className='auth__form' onSubmit={(e) => onRegister(e)}>
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
          Sign Up
        </button>
      </form>
      <p className='auth__help__text'>
        If you already have an account, <br /> Let's sign in{' '}
        <Link to='/sign-in'>here</Link>
      </p>
    </div>
  );
};

export default Register;
