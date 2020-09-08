import React from 'react';
import { Link } from 'react-router-dom';

import firebase from '../../config/firebase.config';
import './Auth.css';

const Login = (props) => {
  const [formData, setFormData] = React.useState({ email: '', password: '' });
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        props.history.push('/');
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, []);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password);
      console.log(res);
      props.history.push('/');
    } catch (error) {
      throw error.message;
    }
  };

  return loading ? (
    <div>loading...</div>
  ) : (
    <div className='login'>
      <h2 className='auth__heading'>Sign In</h2>
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
