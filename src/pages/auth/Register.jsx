import React from 'react';
import { Link } from 'react-router-dom';

import firebase from '../../config/firebase.config';
import './Auth.css';

const Register = (props) => {
  const [formData, setFormData] = React.useState({ email: '', password: '' });

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      user && props.history.push('/');
    });
  }, []);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password);
      console.log(res);
      props.history.push('/');
    } catch (error) {
      throw error.message;
    }
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
        />
        <br />
        <input
          id='password'
          className='input__password'
          type='password'
          placeholder='Password'
          onChange={(e) => onChange(e)}
        />
        <br />
        <button className='btn__auth' type='submit'>
          Sign Up
        </button>
      </form>
      <p className='auth__help__text'>
        If you already have an account, <br /> Let's sign in{' '}
        <Link to='/sign-up'>here</Link>
      </p>
    </div>
  );
};

export default Register;
